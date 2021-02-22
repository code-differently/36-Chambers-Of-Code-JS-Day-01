class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */
    wordCount(input) {
        return input.split(' ').length;
    }

    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
    letterCapitalize(str) {
        const newString = str.split(" ");
        for (let i = 0; i < newString.length; i++) {
            newString[i] = newString[i][0].toUpperCase() + newString[i].substr(1);
}
        return newString.join(" ");
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    firstReverse(input){
        let revString = input.split('');
        return revString.reverse().join('');
    }

    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord(input) {
        let longString = input.split(/\s*\b\s*/);
        let longestStrng = longString.sort(
            (strA, strB) => {
                return strB.length - strA.length; 
            }
        )
        return longestStrng[0];
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
        let swaped = str.split('').map(a => {
            return a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()
        })
      
        swaped.join('')
        return ('swaped', swaped.join(''));
        }

}

module.exports = Problem;