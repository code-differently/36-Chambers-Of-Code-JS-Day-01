class Problem {
    /**
 * Have the wordCount(input) take the str string parameter being passed
 * and return the number of words the string contains
 * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
 * separated by single spaces.
 */
// Declare the variable
wordCount(input) {
    //Declare variable
    // Split string into an array of substrings
    str = str.split(" ");
    // Count the number of substrings(words)
    return str.split(" ").length
}


/**
 * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
 letter of each word. Words will be separated by only one space.
* 
*/
letterCapitalize(str) {
    // Split string into an array of substrings
    str = str.split(" ");
    //For loop to capture 1st letter of each substring
    for(var i = 0, x = str.length; i < x; i++) {
        //Capitalize 1st letter of each substring
        str[i] = str[i[0].toUpperCase() + str[i].substr(1);
    }
    //Return all substrings together
    return str.join;
}



/**
 * Have the function firstReverse(String input) take the input parameter being passed and
 * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
 * program should return the string sredoC dna dlroW olleH.
 */

firstReverse(input){
    // Split string into an array of substrings
    str = str.split(" ");
    // Reverse the order of the substrings and join them together.
    return str.split("").reverse().join("");
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