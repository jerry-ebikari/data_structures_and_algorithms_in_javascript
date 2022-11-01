function bubbleSort(originalArray) {
    const copyOfArray = [...originalArray];
    let arrLength = copyOfArray.length;
    let swapped = false;
    for (let i = 0; i < arrLength; i++) {
        swapped = false;
        for (let j = 0; j < arrLength - i - 1; j++) {
            // For ascending sort, swap if element at lower index is greater
            // Change sign to < for descending sort
            if (copyOfArray[j] > copyOfArray[j + 1]) {
                [copyOfArray[j], copyOfArray[j + 1]] = [copyOfArray[j + 1], copyOfArray[j]];
                swapped = true;
            }
        }
        if (swapped == false) {
            return copyOfArray;
        }
    }
    return copyOfArray;
}

// Test
const arrayToSort = [71, 0, 89, 33, -1, 4, -4];
console.log(bubbleSort(arrayToSort));