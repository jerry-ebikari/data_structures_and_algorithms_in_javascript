function selectionSort(originalArray) {
    // make a copy of original array
    const arr = [...originalArray];
    let arrLength = arr.length;
    let minElementIndex = 0;
    for (let i = 0; i < arrLength; i++) {
        minElementIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            // Swap if assumed minimum element is less than current element
            if (arr[minElementIndex] > arr[j]) {
                minElementIndex = j;
            }
        }
        if (minElementIndex != i) {
            [arr[i], arr[minElementIndex]] = [arr[minElementIndex], arr[i]]
        }
    }
    return arr;
}

// Test
const arrayToSort = [71, 0, 89, 33, -1, 4, -4];
console.log(selectionSort(arrayToSort));