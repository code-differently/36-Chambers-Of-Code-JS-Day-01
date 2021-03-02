class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
    //identify and add the number of spaces in the string and then add one as each word will be identified as 
    //such by the space that follows it with the exception of the last word which is not followed by a space
        return input.split(' ').length;
    }

    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */

    letterCapitalize(str) {
    //identify spaces
    //then capitalize the first character in the string and every character after a space
        var strArr = str.split(' ');
        var newArr = [];
      
        for(var i = 0 ; i < strArr.length ; i++ ){
      
          var FirstLetter = strArr[i].charAt(0).toUpperCase();
          var restOfWord = strArr[i].slice(1);
      
          newArr[i] = FirstLetter + restOfWord;
      
        }
      
        return newArr.join(' ');
      
      }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    //


    firstReverse(input){
    
    //take string and index
    //then reverse order of index numbers to count down instead of up
        return null;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {

    //assign values to words by counting the number of characters between spaces
    //then create a loop comparing each value
    //return the one or two values that are highest
        return null;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
    
    //create an if/else to indicate that if a character is lowercase to change uppercase, else change to lowercase
        return null;
    }

}

module.exports = Problem;