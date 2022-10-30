function bubbleSort(originalArray) {
    const copyOfArray = [...originalArray];
    let arrLength = copyOfArray.length;
    let swapped = false;
    for (let i = 0; i < arrLength; i++) {
        swapped = false;
        for (let j = 0; j < arrLength - i - 1; j++) {
            // If element at lower index is greater
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
const arrayToSort = [0, -1, 4, -4]
console.log(bubbleSort(arrayToSort));