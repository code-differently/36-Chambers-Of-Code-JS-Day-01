class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        const inputArr = input.split(' ');
        return inputArr.length;
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        let arr = str.split(' ');
        for (let i=0; i<arr.length; i++) {
            arr[i] = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1,arr[i].length);
        }
        return arr.join(' ');
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        const arr = input.split('');
        arr.reverse();
        const output = arr.join('');
        return output;
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        const arr = input.split(' ');
        let longest = 0;
        for (let i=1; i<arr.length; i++) {
            if (arr[longest].replace(/([a-zA-Z]+)(.*)/, '$1').length < arr[i].replace(/([a-zA-Z]+)(.*)/, '$1').length) {
                longest = i;
            }
        }
        return arr[longest];
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        // code goes here
        let output = '';
        for (let i=0; i<str.length; i++) {
            if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
                output += String.fromCharCode(str.charCodeAt(i) + 32);
            } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
                output += String.fromCharCode(str.charCodeAt(i) - 32);
            } else {
                output += str[i]
            }
        }
        return output;
    }

}

module.exports = Problem;