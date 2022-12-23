function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    swapIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            if (swapIndex != i) {
                [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
            }
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }
    let swapIndex = pivot(arr, start, end);
    quickSort(arr, start, swapIndex - 1);
    quickSort(arr, swapIndex + 1, end);
}

let arr = [10, 24, 1, 9, 76, 72, 73];
quickSort(arr);
console.log(arr);