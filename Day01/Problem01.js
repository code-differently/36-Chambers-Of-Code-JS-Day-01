class Problem {

    wordCount(input) {
        return input.split(" ").length;
    }

    letterCapitalize(str) {
        const userInput = str;
        const wordsOnly = userInput.split(" ");

        for (let i = 0; i < wordsOnly.length; i++) {
            wordsOnly[i] = wordsOnly[i][0].toUpperCase() + wordsOnly[i].substr(1);
        }

        let newStr = wordsOnly.join(" ");
        return newStr;
    }

    firstReverse(input) {
        return input.split("").reverse().join("");
    }

    longestWord(input) {
        var string = input.match(/\w[a-z]{0,}/gi);
        var longestWord = string[0];
        for (var i = 1; i < string.length; i++) {
            if (string[i].length > longestWord.length) {
                longestWord = string[i];
            }
        }
        return longestWord;
    }

    SwapCase(str) {
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