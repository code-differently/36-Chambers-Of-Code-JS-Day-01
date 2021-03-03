class Problem {
        /**
     * Have the wordCount(input) take the str string parameter being passed
     * and return the number of words the string contains
     * (e.g. "Never eat shredded wheat or cake" would return 6). Words will be
     * separated by single spaces.
     */

        wordCount(input) {
            // code goes here
            let string = input.split(' ');
            let wordLength = string.length;
            return wordLength;
        }
    }


    /**
     * Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
     letter of each word. Words will be separated by only one space.
    * 
    */

   letterCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

        }
        return null;
    }



    /**
     * Have the function firstReverse(String input) take the input parameter being passed and
     * return the string in reversed order. For example: if the input string is "Hello World and Coders" then your
     * program should return the string sredoC dna dlroW olleH.
     */

    function reverseString(str) {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    reverseString('hello');

   // firstReverse(input) {
       // let splitString = input.split('');
       // let reverseArray = splitString.reverse();
        //let joinArray = reverseArray.join('');
        //return joinArray;
    }


    /**
     * Have the longestWord(String input) take the input parameter being passed and return the
     * largest word in the string. If there are two or more words that are the same length,
     * return the first word from the string with that length. Ignore punctuation and assume
     * input will not be empty.
     */
    longestWord (input)
              // let splitString = input.split('');
       // let Array = splitString.length ();
       longestWord(input) {
        // code goes here
        let strSplit = input.split('');
        let longestWord = 0;
        for (let i = 0; i < strSplit.length; i++){
            if(strSplit[i].length > longestWord){
                longestWord = strSplit[i].length;
            }
        }
        return longestWord;

        longest = str => {
           let words = str.split(" ");
            let size = 0;
            let max = [" "];
             for (let i = 0; i < words.length; i++) {
              if (words[i].length > size) {
                size = words[i].length;
              }
              if (max[max.length - 1].length < words[i].length) {
                max = [];
                max.push(words[i]);
              } else {
                max = [...max, words[i]];
              }
            }
            return max;
          };
          
    }

              return sen;

            }

            // keep this function call here
            console.log(LongestWord(readline())); // code goes here
        return null;
    }

    /**
     * Have the swapCase(String input) take the input parameter and swap the case of each
     * character. For example: if str is "Hello World" the output should be hELLO wORLD.
     * Let numbers and symbols stay the way they are.
     */
    swapCase(str) {
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

        return null;
    }

}

module.exports = Problem;

letterCapitalize(string) {
        
    return string.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}
