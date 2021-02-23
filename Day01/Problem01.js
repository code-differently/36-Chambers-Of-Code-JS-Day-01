class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */
wordCount(input) {
    // code goes here
    const inputArr = input.split(' ');
    return inputArr.length;
}


/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
 letter of each word. Words will be separated by only one space.
* 
*/
letterCapitalize(str) {
let capLetters = str.split(' ');
    for (let i = 0; i < capLetters.length; i++) {
        capLetters[i] = capLetters[i][0].toUpperCase() + capLetters[i].substr(1);
     }
    return capLetters.join(' ');
}


/**
 * Have the function firstReverse(String input) take the input parameter being passed and
 * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
 * program should return the string sredoC dna dlroW olleH.
 */

firstReverse(input){
    let reversedString = "";
    for(let i = input.length - 1; i >= 0; i--) {
        reversedString += input[i];
    }
    return reversedString;
}

/**
 * Have the longestWord(String input) take the input parameter being passed and return the
 * largest word in the string. If there are two or more words that are the same length,
 * return the first word from the string with that length. Ignore punctuation and assume
 * input will not be empty.
 */
longestWord(input) {
    // code goes here
    let longWord = "";
    input = input.replace(/[^a-zA-Z0-9]/gi, " ");
    input = input.split(" ");
        for (let i = 0; i < input.length; i++) {
            if (input[i].length > longWord.length) {
                longWord = input[i];
            }
         }
        return longWord;
    }
        


/**
 * Have the swapCase(String input) take the input parameter and swap the case of each
 * character. For example: if str is "Hello World" the output should be hELLO wORLD.
 * Let numbers and symbols stay the way they are.
 */
swapCase(str) {
    // code goes here
let letters = str.split("");

for(let i = 0; i<letters.length; i++){
    if(letters[i] === letters[i].toLowerCase()){
        letters[i] = letters[i].toUpperCase();
    } else {
        letters[i] = letters[i].toLowerCase();
    }
}

return letters.join("");
}

}


module.exports = Problem;