const reverseString = function(words) {
    const splitWords = words.split("");
    const rsplitWords = splitWords.reverse();
    const reversedWords = rsplitWords.join("");
    return reversedWords;
};
// console.log(reverseString("Hey! Vsauce!"));
// Do not edit below this line
module.exports = reverseString;
