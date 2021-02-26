class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        // code goes here
        var inputWordLength = input.split(" ");
        return inputWordLength.length;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        var space = str.split(" ");
        for (let i = 0; i < space.length; i++) {
            space[i] = space[i][0].toUpperCase() + space[i].substr(1);
        }

        return space.join(" ");
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        return  input.split('').reverse().join('');
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        // code goes here
        var str = input.match(/\w[a-z]{0,}/gi);
        var longest = 0;
        var word = null;
        str.forEach(function(str) {
            if (longest < str.length) {
                longest = str.length;
                word = str;
            }
        });
        return word;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // code goes here
            let newStr = "";
            for (let i = 0; i < str.length; i++) {
                if (str[i] === str[i].toLowerCase()) {
                    newStr += str[i].toUpperCase();
                } else {
                    newStr += str[i].toLowerCase();
                }
            }

            return newStr;
        }
    }    

module.exports = Problem;