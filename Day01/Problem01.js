class Problem {
  /**
   * Have the wordCount(input) take the str string parameter being passed
   * and return the number of words the string contains
   * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
   * separated by single spaces.
   */
  wordCount(input) {
    let counter = input.split(" ");
    return counter.length;
  }

  /**
       * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
       letter of each word. Words will be separated by only one space.
      *
      */

  letterCapitalize(str) {
    let capWords = str.split(" ");
    for (let i = 0; i < capWords.length; ++i) {
      capWords[i] = capWords[i][0].toUpperCase() + capWords[i].substr(1);
    }
    return capWords.join(" ");
  }

  /**
   * Have the function firstReverse(String input) take the input parameter being passed and
   * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
   * program should return the string sredoC dna dlroW olleH.
   */

  firstReverse(input) {
    return input.split("").reverse().join("");
  }

  /**
   * Have the longestWord(String input) take the input parameter being passed and return the
   * largest word in the string. If there are two or more words that are the same length,
   * return the first word from the string with that length. Ignore punctuation and assume
   * input will not be empty.
   */

  longestWord(input) {
    let inputStr = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
    let longWord = inputStr[0];

    for (let i = 1; i < inputStr.length; ++i) {
      if (inputStr[i].length > longWord.length) {
        longWord = inputStr[i];
      }
    }
    return longWord;
  }

  /**
   * Have the swapCase(String input) take the input parameter and swap the case of each
   * character. For example: if str is "Hello World" the output should be hELLO wORLD.
   * Let numbers and symbols stay the way they are.
   */

  swapCase(str) {
    let newWord = "";
    let newString = "";

    newString = str.replace(/./g, function (swapWord) {
      if (swapWord.match(/[a-z]/)) {
        newWord = swapWord.toUpperCase();
      } else if (swapWord.match(/[A-Z]/)) {
        newWord = swapWord.toLowerCase();
      } else {
        newWord = swapWord;
      }
      return newWord;
    });
    return newString;
  }
}

module.exports = Problem;
