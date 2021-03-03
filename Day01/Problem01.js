class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    // Convert string to an array, factoring in space between each word
    // Use split method, and empty string
    WordCount(String) {
        var str = "Never eat shredded wheat or cake"
        var res = string.split(""); //(This didn't work, and the fix said to delete it, but the test still failed)
        return string.split("").length;
        return null;
    }

    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
   // Convert string to an array, factoring in space between each word
   // Use a for loop to go through each word
   // Capitalize the 1st letter in each word at the value of 0, using charAt and toUpperCase
   // Add the remainder of the word, in lower case, using slice method
   // Convert array back to string
    letterCapitalize(str) {
        var array = string.split("");
        for (var i = 0; i < array.length; i++) {
            array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
        return array.join("");
        return null;
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        return null;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // code goes here
        return null;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // code goes here
        return null;
    }

}

module.exports = Problem;