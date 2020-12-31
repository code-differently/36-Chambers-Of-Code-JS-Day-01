class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input){
        // create a variable to hold the output and start at 1
        let output = 1
        // create a loop the runs through the string
        for(let i = 0; i < input.length; i ++){
        // start loop at begining of string
        // have the loop check for empty spaces
            if(input[i-1] === " "){
        // each space, add 1 to the output.
                output += 1
                console.log(output)
            }
        // end loop at the end of the given string
        }
        // return variable that was created for output
        return output
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
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



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        // create variable to hold output
        // create a loop the starts at begining of string; ends at the end of string
        // reverse the order of the string
        // add to variable
        // return output

        return null;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // create variable to contain output
        // create a loop togo through each character
        // split each word by space
        // create conditional to compare .length of each word
        // conditional for 2 + words
        // retunr output
        return null;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // create string variable to contain output
        // create loop that goes through string
        // check if character is lower or upper
        // change character to opposite
        // add change characters to variable along with numbers & symbols
        // return string variable
        return null;
    }

}

module.exports = Problem;