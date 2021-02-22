class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // code goes here
        let inputArray = input.split(" ");  //  split input into array of wordd instead of characters
        let stringWords = inputArray.length;  // counts the number of words in the array
        return stringWords;  // returns the number of words
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        let inputArray = str.split(" ");  // split str into array of words instead of characters
        for (let i = 0; i < inputArray.length; i++) {  // step thru array by word
            let indexPosition = inputArray[i];  // each index position is a word
        inputArray[i] = indexPosition[0].toUpperCase() + indexPosition.substring(1);  // capitalize 1st character of word, then concatenates the remaining characters of the word
    }
    return inputArray.join(" ");
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input) {
        // code goes here
        return input.split("").reverse().join("");  // splits input into individuals elements, flips order & concatenates them
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // code goes here
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
        var switchCase = "";  // create a new variable 
        for (var i = 0; i < str.length; i++) {  // steps thru array
            if (str[i] === str[i].toLowerCase()) {  // if position is lowercase, switch to uppercase
                switchCase += str[i].toUpperCase();
            } else {  // otherwise, it must be uppercase, therefore
                switchCase += str[i].toLowerCase();  //  switch to lowercase & advance to the next position
            }
        }
        return switchCase;
    }

}

module.exports = Problem;