function bubbleSort(originalArray) {
    // make a copy of original array
    const arr = [...originalArray];
    let arrLength = arr.length;
    let swapped = false;
    for (let i = 0; i < arrLength; i++) {
        swapped = false;
        for (let j = 0; j < arrLength - i - 1; j++) {
            // For ascending sort, swap if element at lower index is greater
            // Change sign to < for descending sort
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (swapped == false) {
            return arr;
        }
    }
    return arr;
}

// Test
const arrayToSort = [71, 0, 89, 33, -1, 4, -4];
console.log(bubbleSort(arrayToSort));