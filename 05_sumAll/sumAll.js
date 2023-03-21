const sumAll = function(number1, number2) {
    let finalArr = [];
    let total = 0;
    if (number1 > 0 && number2 > 0 && number1 < number2){
        for (let i = number1; i < number2 + 1 ; i++){
        finalArr.push(i);
        }
        for (var element of finalArr){
        total += element;
        } 
        return total;
    } else if (number1 > 0 && number2 > 0 && number1 > number2){
        for (let i = number2; i < number1 + 1 ; i++){
        finalArr.push(i);
        }
        for (var element of finalArr){
        total += element;
        } 
        return total;
    } else return "ERROR";
};

console.log(sumAll("1", 15));
console.log(sumAll(2, 15));
// Do not edit below this line
module.exports = sumAll;
