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
        let newStr = str;
        for (let i = 0; i < subStr.length; i++) {
            if (!newStr.includes(subStr[i])) {
            return false;
            }
            newStr = newStr.replace(subStr[i], "");
        }
        return true;
    }
  }