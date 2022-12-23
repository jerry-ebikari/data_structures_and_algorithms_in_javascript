function mergeSortedArrays(arr1, arr2) {
    let [i, j] = [0, 0];
    let result = [];
    while (i < arr1.length || j < arr2.length){
        if (i == arr1.length) {
            result.push(...arr2.slice(j));
            break;
        }
        else if (j == arr2.length) {
            result.push(...arr1.slice(i));
            break;
        }
        else if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result;
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSortedArrays(left, right)
}

console.log(mergeSort([10, 24, 1, 9, 76, 72, 73]))