function insertionSort(originalArray) {
    // make a copy of original array
    let arr = [...originalArray];
    const arrLength = arr.length;
    for (let i = 1; i < arrLength; i++) {
        for (let j = i; j > 0; j--) {
            // Swap if element at lower index is greater (for ascending sort)
            // Change sign to < for descending sort
            if (arr[j - 1] > arr[j]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
            else {
                break;
            }
        }
    }
    return arr;
}

// Test
const arrayToSort = [71, 0, 89, 33, -1, 4, -4];
console.log(insertionSort(arrayToSort));