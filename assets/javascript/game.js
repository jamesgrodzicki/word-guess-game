var charList = {0:'aang', 1:'jonsnow'}
var compIndex = Math.floor(Math.random()*Object.keys(charList).length);
var compChoice = charList[compIndex];
console.log(compChoice);

function splitWord(character){
    var charSplit = character.split("");
    return charSplit;
}

console.log(splitWord(compChoice));

document.onkeyup = function(event){
    var userPress = event.key.toLowerCase();
    console.log(userPress);
}
