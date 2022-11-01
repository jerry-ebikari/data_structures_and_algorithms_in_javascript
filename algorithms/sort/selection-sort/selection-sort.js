function selectionSort(originalArray) {
    const copyOfArray = [...originalArray];
    let arrLength = copyOfArray.length;
    let minElementIndex = 0;
    for (let i = 0; i < arrLength; i++) {
        minElementIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            // Swap if assumed minimum element is less than current element
            if (copyOfArray[minElementIndex] > copyOfArray[j]) {
                minElementIndex = j;
            }
        }
        if (minElementIndex != i) {
            [copyOfArray[i], copyOfArray[minElementIndex]] = [copyOfArray[minElementIndex], copyOfArray[i]]
        }
    }
    return copyOfArray;
}

// Test
const arrayToSort = [71, 0, 89, 33, -1, 4, -4];
console.log(selectionSort(arrayToSort));