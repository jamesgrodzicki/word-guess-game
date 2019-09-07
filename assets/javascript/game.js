document.addEventListener("DOMContentLoaded", function (event) {
    var charList = ['aang','mikasa'];
    var compIndex = Math.floor(Math.random() * charList.length);
    var compChoice = charList[compIndex];
    var guesses = [];
    var guessesLeft = 12;
    var wins = 0;
    //console.log(compChoice);

    function splitWord(character) {
        var charSplit = character.split("");
        return charSplit;
    }

    function charDisplay(character) {
        var charContainer = splitWord(character);
        for (var i = 0; i < charContainer.length; i++) {
            charContainer[i] = "_";
        }
        return charContainer;
    }

    var charContainer = charDisplay(compChoice);


    function checkCorrect(guess, character, guesses) {
        var charSplit = splitWord(character)
        var matched = false;
        for (var i = 0; i < charSplit.length; i++) {
            if (guess === charSplit[i]) {
                charContainer[i] = guess;
                matched = true
            }
        }

        if (matched) {
            return;
        }

        else if (guesses.includes(guess) == false) {
            guesses.push(guess);
            guessesLeft--;
            document.getElementById("failed-guess").innerHTML += guess + " ";
        }
    }

    function checkWin(){
        return !charContainer.includes("_");
    }

    function checkLoss(){
        if(guessesLeft == 0){
            return true;
        }
        
        return false;
    }

    function resetGame(){
        var newChoice = Math.floor(Math.random() * charList.length);
        compChoice = charList[newChoice];
        charContainer = charDisplay(compChoice);
        guessesLeft = 12;
        guesses = [];
        document.getElementById("failed-guess").innerHTML = "";
    }

    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    for (var i = 0; i < compChoice.length; i++) {
        var targetDiv = document.getElementById("charName");
        var newP = document.createElement("p");
        targetDiv.appendChild(newP);
        newP.setAttribute("class", "letter");

    }

    //document.getElementsByClassName("letter").innerHTML = (charDisplay(compChoice)).join("");


    for (var i = 0; i < charContainer.length; i++) {
        document.getElementsByClassName("letter")[i].innerHTML = "_";
    }

    //checkCorrect("o", compChoice);
    //console.log(splitWord(compChoice));

    document.onkeyup = function (event) {
        var userPress = event.key.toLowerCase();
        document.querySelector("#game-start").innerHTML = "";
        checkCorrect(userPress, compChoice, guesses);
        if(checkWin()){
            resetGame();
            wins++;
        }

        else if(checkLoss()){
            resetGame();
            wins = 0;
        }
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = "Games Won " + wins;

        removeElementsByClass("letter");

        var nameDiv = document.getElementById("charName");
        charContainer.forEach(function (letter) {
            var newLetterP = document.createElement("p");
            newLetterP.setAttribute("class", "letter");
            newLetterP.textContent = letter;
            nameDiv.appendChild(newLetterP);
        });
    }
})
