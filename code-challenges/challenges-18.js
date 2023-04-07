'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    const arr = str.split(' ');
    let index = (Math.trunc(arr.length / 2));
    const middleStr = arr[index]
    const strSplit = middleStr.split('')
    return strSplit.length


}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    const strArr1 = str1.toLowerCase().split('');
    const strArr2 = str2.toLowerCase().split('');
    if (strArr1.length != strArr2.length) { return false }
    else {
        for (let i = 0; i < strArr1.length; i++) {
            for (let j = 0; j < strArr2.length; j++) {
                if (strArr1[i] == strArr2[j]) {
                    strArr1.splice(0, i + 1);
                    strArr2.splice(0, j + 1);
                    break;
                }
                else { continue; }
            }
        }
        if (strArr2.length == 0) { return true }
        else { return false; }
    }

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    if (arr.includes(int) == true) {
        return arr.indexOf(int)
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > int) {
                return i;
            }
            else {continue}
        }
    }
    return (arr.length)
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };