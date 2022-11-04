# Number Square Matcher

## Problem Statement
Write a function that takes two arrays, arr1 and arr2, as input and returns true if arr2 contains the square of every element in arr1. The frequency of each number and its square must be equal. Take for example:  

``` js
arr1 = [2, 1, 4]  
arr2 = [1, 16, 4]  
squareMatcher(arr1, arr2)   // true

arr1 = [2, 1, 2]  
arr2 = [1, 4]  
squareMatcher(arr1, arr2)   // false

arr1 = [2, 1, 2]  
arr2 = [1, 4, 4]  
squareMatcher(arr1, arr2)   // true

arr1 = [2, 1, 2]  
arr2 = [1, 4, 4, 1]  
squareMatcher(arr1, arr2)   // false
```