function checkAnagram(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    let obj1 = covertStringToFrequencyObject(str1);
    let obj2 = covertStringToFrequencyObject(str2);
    for(let character in obj1) {
        if (obj1[character] != obj2[character]) {
            return false;
        }
    }
    return true;
}

function covertStringToFrequencyObject(str) {
    let strLength = str.length;
    str = str.toLowerCase();
    let obj = {};
    for (let i = 0; i < strLength; i++) {
        let character = str[i];
        if (obj.hasOwnProperty(character)) {
            obj[character]++;
        }
        else {
            obj[character] = 1;
        }
    }
    return obj;
}

// Test
let str1 = "too";
let str2 = "to";
console.log(checkAnagram(str1, str2));