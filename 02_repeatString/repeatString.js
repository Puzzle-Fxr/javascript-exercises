/*const repeatString = function(word, fig) {
    return word.repeat(fig);
};*/

const repeatString = function(word, fig) {
    if (fig < 0){
        return "ERROR";
    } else return word.repeat(fig);
};
// Do not edit below this line
module.exports = repeatString;
