const removeFromArray = function(array1, ...array2) {
    let newArray = [];
    array1.forEach((element) => {
        if (!array2.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
}


// console.log(removeFromArray([1, 2, 3, 4, 5, "yo"], 4, 3, "yo"));
// Do not edit below this line
module.exports = removeFromArray;
