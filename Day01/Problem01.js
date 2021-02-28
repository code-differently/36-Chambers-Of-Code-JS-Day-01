class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */
wordCount(input) {
    // code goes here
    let string = input.split(' ');
    let wordLength = string.length;
    return wordLength;
}
/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first
 letter of each word. Words will be separated by only one space.
*
*/
//     letterCapitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
letterCapitalize(str) {
// create a variable to contain output
let output = ""
// create a loop to go through the string
for(let i = 0; i < str.length; i ++){
// capitalize first index
    if(i === 0){
        output += str[i].toUpperCase()
// add to variable
    }
    else if (str[i-1] === " "){
// capitalize the index after each space
// add to variable
        output += str[i].toUpperCase()
    }
    else {
        output += str[i]
    }
}
// return the output
return output;
}
// Line 53 - 56 is another way to run letter Capitalize test case
// letterCapitalize(string) {
//     return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
// }
/**
 * Have the function firstReverse(String input) take the input parameter being passed and
 * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
 * program should return the string sredoC dna dlroW olleH.
 */
firstReverse(input){
    let splitString = input.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return joinArray;
}
/**
 * Have the longestWord(String input) take the input parameter being passed and return the
 * largest word in the string. If there are two or more words that are the same length,
 * return the first word from the string with that length. Ignore punctuation and assume
 * input will not be empty.
 */
longestWord(input) {
    var str = input.split(/[^a-zA-Z]/);  // splits string into words & ignores non-letters
    var longest = 0;
    var word = str;
    for (var i = 0; i <= str.length - 1; i++) {  // steps thru array & adjusts count to begin at 0
        if (longest < str[i].length) {  // compares current longest with word in the array
            longest = str[i].length;  // longest word is replaced with new longest word
            word = str[i];  // word is now the longest word
        }
    }
    return word;
}
/**
 * Have the swapCase(String input) take the input parameter and swap the case of each
 * character. For example: if str is "Hello World" the output should be hELLO wORLD.
 * Let numbers and symbols stay the way they are.
 */
swapCase(str) {
    // code goes here
    var newLetters = "";
for(var i = 0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
        newLetters += str[i].toUpperCase();
    }else {
        newLetters += str[i].toLowerCase();
    }
}
console.log(newLetters);
return newLetters;
}
}
module.exports = Problem;