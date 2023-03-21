const sumAll = function(number1, number2) {
    let finalArr = [];
    for (let i = number1; i < number2 + 1 ; i++){
        finalArr.push(i);
    }
    let total = 0;

    for (var element of finalArr){
        total += element;
    } 
    return total;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
