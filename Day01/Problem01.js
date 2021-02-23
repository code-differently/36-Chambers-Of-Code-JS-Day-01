class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // we want to split up each word with a space and get the length.
        return input.split(' ').length;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(input) {
        // first we have to capitalize the first letter of the first word
        // using slice and setting it to lowercase will lower case the rest of the word.
        let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
        // Then we have to split up all the words entered into an array
        let words = input.split(' ').map(capitalizeString);
        let capitalizeAllBeginningLetters = words.join(' ');
        return capitalizeAllBeginningLetters;
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        // we need to convert the input into an array
        let word = input.split('');
        // now we have to use the reverse function on the array
        let reverseStr = word.reverse().join('');
        // return the reversed array
        return reverseStr;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // convert input to an array

      input = input.replace(/[^0-9a-zA-Z ]/g, '');
        let word = input.split(' ');
        // using the sort 
   
       

        let sortArray = word.sort((strA, strB) => {
        // the below will move up the largest string in the array and return the largest string inside the aray
            return strB.length - strA.length;
        })
        // we need to make sure we are returning the index of the array [0] for the first word
        return sortArray[0];
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // code goes her
        const isUpperCase = (character) => character.toUpperCase() == character;

        return str.split(' ').map( word => {
           return word.split('').map( c => isUpperCase(c) ? c.toLowerCase() : c.toUpperCase()).join('')
        }).join(' ');
    }

}

module.exports = Problem;