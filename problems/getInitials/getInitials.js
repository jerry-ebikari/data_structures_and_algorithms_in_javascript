const getInitials = (name) => (
    name
      .trim()
      .replace(/\s+/, " ")
      .split(" ")
      .map(word => word[0].toUpperCase())
      .join(".")
)

// console.log(getInitials(" jerry  ebikari needam"));
// console.log(getInitials("tari odubo"));

function nextGreatestNumber(num) {
  let numStr = num.toString();
  let index = findIndex(numStr);
  if (index == -1) return "Not Possible";
  let right = numStr.slice(index + 1);
  let smallestIndex = index + findSmallestIndex(right) + 1;
  numStr = (
    numStr.slice(0, index) +
    numStr[smallestIndex] +
    numStr.slice(index + 1, smallestIndex) +
    numStr[index] +
    numStr.slice(smallestIndex + 1)
  )
  right = numStr.slice(index + 1).split("").sort().join("");
  numStr = numStr.slice(0, index + 1) + right;
  return parseInt(numStr);

  function findIndex(str) {
    for (let i = str.length - 1; i > 0; i--) {
      if (parseInt(str[i]) > parseInt(str[i - 1])) {
        return i - 1;
      }
    }
    return -1;
  }

  function findSmallestIndex(str) {
    let smallestIndex = 0;
    for (let i = 1; i < str.length; i++) {
      if (parseInt(str[smallestIndex]) > parseInt(str[i])) {
        smallestIndex = i;
      }
    }
    return smallestIndex;
  }
}

function minWindowSubstring(strArr) {
  const [str, sub] = strArr;
  let windowWidth = sub.length;
  for (let i = 0; i <= str.length - windowWidth; i++) {
    for (let j = windowWidth; j <= str.length; j++) {
      const subStr = str.slice(j - windowWidth, j);
      if (isContained(subStr, sub)) {
        return subStr;
      }
    }
    windowWidth++;
  }
  return "Not Contained";

  // Helper function
  function isContained(str, subStr) {
    for (let i = 0; i < subStr.length; i++) {
      if (!str.includes(subStr[i])) {
        return false;
      }
      str.replace(subStr[i], "");
    }
    return true;
  }
}

function numBalanced(str) {
  let difference = (
    (str.match(/\)/g) || []).length -
    (str.match(/\(/g) || []).length
  )
  return Math.abs(difference);
}

console.log(numBalanced("()"))
console.log(numBalanced("(()"))
console.log(numBalanced("))()))))()"))
console.log(numBalanced(")))))"))
