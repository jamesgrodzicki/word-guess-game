document.addEventListener("DOMContentLoaded", function (event) {
    var charList = ['mikasa', 'jonsnow', 'finn', 'tsukimoto', 'kazama', 'manspider', 'dennis', 'creed', 'zuko', 'thehound', 'aang'];
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

    function displayCharacter(){
        if(compChoice == "mikasa"){
            document.getElementById("character-pic").setAttribute("src", "https://cdn.myanimelist.net/r/360x360/images/characters/9/215563.jpg?s=2b0221c071203f80b2196b9c5125a792");
            document.getElementById("character-name").innerHTML = "Mikasa";
        }

        else if(compChoice == "jonsnow"){
            document.getElementById("character-pic").setAttribute("src", "assets/images/imageedit_2_4654843237.jpg");
            document.getElementById("character-name").innerHTML = "Jon Snow";
        }

        else if(compChoice == "finn"){
            document.getElementById("character-pic").setAttribute("src", "https://ih0.redbubble.net/image.727011797.6014/raf,360x360,075,t,fafafa:ca443f4786.jpg");
            document.getElementById("character-name").innerHTML = "Finn";
        }

        else if(compChoice == "tsukimoto"){
            document.getElementById("character-pic").setAttribute("src", "https://cdn.myanimelist.net/r/360x360/images/characters/11/266675.jpg?s=996a93874ae39f63731130e47807ae7d");
            document.getElementById("character-name").innerHTML = "Tsukimoto";
        }

        else if(compChoice == "kazama"){
            document.getElementById("character-pic").setAttribute("src", "https://cdn.myanimelist.net/r/360x360/images/characters/13/250133.jpg?s=639ccb123ef987fd39316da1a938c865");
            document.getElementById("character-name").innerHTML = "Kazama";
        }

        else if(compChoice == "manspider"){
            document.getElementById("character-pic").setAttribute("src", "https://ih1.redbubble.net/image.802017848.9701/raf,360x360,075,t,fafafa:ca443f4786.jpg");
            document.getElementById("character-name").innerHTML = "Frank as Man-Spider";
        }

        else if(compChoice == "dennis"){
            document.getElementById("character-pic").setAttribute("src", "assets/images/imageedit_4_4676778040.jpg");
            document.getElementById("character-name").innerHTML = "Dennis";
        }

        else if(compChoice == "creed"){
            document.getElementById("character-pic").setAttribute("src", "https://ih0.redbubble.net/image.551086492.9996/raf,360x360,075,t,fafafa:ca443f4786.jpg");
            document.getElementById("character-name").innerHTML = "Creed";
        }

        else if(compChoice == "zuko"){
            document.getElementById("character-pic").setAttribute("src", "https://ih1.redbubble.net/image.297258187.1073/raf,360x360,075,t,fafafa:ca443f4786.jpg");
            document.getElementById("character-name").innerHTML = "Zuko";
        }

        else if(compChoice == "thehound"){
            document.getElementById("character-pic").setAttribute("src", "assets/images/imageedit_9_7258830428.jpg");
            document.getElementById("character-name").innerHTML = "The Hound";
        }

        else if(compChoice == "aang"){
            document.getElementById("character-pic").setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWsoM9G7MUfuMaxxfeY1L8bOfAKak807fgTYGYuW3rlTjBUeS");
            document.getElementById("character-name").innerHTML = "Aang";
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
            displayCharacter();
            resetGame();
            wins++;
        }

        else if(checkLoss()){
            resetGame();
            wins = 0;
        }
        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("wins").innerHTML = "Games Won in a Row: " + wins;

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

function playSound(url) {
    var sound = new Audio(url);
    sound.play();
}