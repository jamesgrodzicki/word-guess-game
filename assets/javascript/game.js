document.addEventListener("DOMContentLoaded", function (event) {
    var charList = { 0: 'aang', 1: 'jonsnow' }
    var compIndex = Math.floor(Math.random() * Object.keys(charList).length);
    var compChoice = charList[compIndex];
    console.log(compChoice);

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


    function checkCorrect(guess, character) {
        var charSplit = splitWord(character)
        for (var i = 0; i < charSplit.length; i++) {
            if (guess === charSplit[i]) {
                charContainer[i] = guess;
            }
        }
        return charContainer;
    }

    for (var i = 0; i < compChoice.length; i++) {
        var targetDiv = document.getElementById("charName");
        var newP = document.createElement("p");
        targetDiv.appendChild(newP);
        newP.setAttribute("id", "letter");
        document.getElementById("letter").innerHTML = charContainer[i]; 
    }
    document.querySelector("#letter").innerHTML = "";
    //console.log(charDisplay(compChoice));


    //checkCorrect("o", compChoice);
    //console.log(splitWord(compChoice));

    document.onkeyup = function (event) {
        var userPress = event.key.toLowerCase();
        document.querySelector("#game-start").innerHTML = "";
        console.log(checkCorrect(userPress, compChoice));

        var nameDiv = document.getElementById("charName");
        charContainer.forEach(function (name) {
            var newLetterP = document.createElement("p");
            newLetterP.setAttribute("id", "letter");
            newLetterP.textContent = name;
            nameDiv.appendChild(newLetterP);
        });

        for (var i = 0; i < compChoice.length; i++) {
            var parent = document.getElementById("charName");
            var child = document.querySelector("#letter");
            parent.removeChild(child);
        }
    }
})
