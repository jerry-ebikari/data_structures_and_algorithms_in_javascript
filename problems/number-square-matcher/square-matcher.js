function squareMatcher(numbers, squares) {
    if (numbers.length != squares.length) {
        return false;
    }
    let numbersObject = covertArrayFrequencyObject(numbers);
    let squaresObject = covertArrayFrequencyObject(squares);
    if (numbersObject.length != squaresObject.length) {
        return false;
    }
    for (let number in numbersObject) {
        number = Number(number);
        if (numbersObject[number] != squaresObject[number * number]) {
            return false;
        }
    }
    return true;

}

function covertArrayFrequencyObject(arr) {
    let arrLength = arr.length;
    let obj = {};
    for (let i = 0; i < arrLength; i++) {
        let element = arr[i];
        if (obj.hasOwnProperty(element)) {
            obj[element]++;
        }
        else {
            obj[element] = 1;
        }
    }
    return obj;
}

console.log(squareMatcher([2, 1, 2], [1, 4, 4, 1]));