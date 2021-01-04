class Problem {
  /**
   * Have the wordCount(input) take the str string parameter being passed
   * and return the number of words the string contains
   * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
   * separated by single spaces.
   */
  // step 1 decide where input is coming from
  // step 2 define a variable
  // step 3 split string by spaces
  // return the length of the split string

  wordCount(input) {
    // code goes here
    let inputVar = input.split(" ");
    return inputVar.length;
  }

  /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */
  // step 1 find the source of input
  // step 2 define variable.
  // step 3 split the string
  // step 4 create a loop to capitalize the first letter of each word
  // step 5 join the array into a string and return the product.

  letterCapitalize(str) {
    let inputStr = str.split(" ");
    for (let i = 0; i < inputStr.length; i++) {
      let indexVal = inputStr[i];
      inputStr[i] = indexVal[0].toUpperCase() + indexVal.substring(1);
    }
    return inputStr.join(" ");
  }
  /**
   * Have the function firstReverse(String input) take the input parameter being passed and
   * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
   * program should return the string sredoC dna dlroW olleH.
   */
  // step 1 identify the input
  // step 2 split the input into an array
  // step 3 use the reverse function on the array
  // step 4 join the input to create a string
  // step 5 return joined string.

  firstReverse(input) {
    return input.split("").reverse().join("");
  }
  /**
   * Have the longestWord(String input) take the input parameter being passed and return the
   * largest word in the string. If there are two or more words that are the same length,
   * return the first word from the string with that length. Ignore punctuation and assume
   * input will not be empty.
   */
  // step 1 identify input
  // step 2 create a new variable and  split input string
  // step 3 create a hold variable
  // step 4 create a for loop to identify length
  // step 5 create a conditional to determine the longest word
  // step 6 return the longest word.

  longestWord(input) {
    var str = input.split(/[^A-Za-z]/);
    var longest = 0;
    var word = str;
    for (var i = 0; i <= str.length - 1; i++) {
      if (longest < str[i].length) {
        longest = str[i].length;
        word = str[i];
      }
    }
    return word;
  }

  /**
   * Have the swapCase(String input) take the input parameter and swap the case of each
   * character. For example: if str is "Hello World" the output should be hELLO wORLD.
   * Let numbers and symbols stay the way they are.
   */
  // step 1 identify the input
  // step 2 create a variable set to empty quotes
  // step 3 create a for loop for the length of the string
  // step 4 create a conditional statement to check each value
  //  index if upper change to lower and if lower change to upper
  // step 5 return value in step 2
   swapCase(str) {
     let countChanges = 0;
      let isLetter = (c) => c.toLowerCase() !== c.toUpperCase();
      let isLowerCase = (c) => c.toLowerCase() === c;
      let flippedMessage = Array.from(str)
        .map((c) => {
          if (!isLetter(c)) {
            return c;
          }
          countChanges++;
          // return uppercase character if c is a lowercase char
          if (isLowerCase(c)) {
            return c.toUpperCase();
          }
          // Here, we know c is an uppercase character, so return the lowercase
          return c.toLowerCase();
        })
        .join("");
        return flippedMessage  }
  //    code goes here
}

module.exports = Problem;
