const { TestScheduler } = require('jest');
const Problem = require('./Problem01');

test("wordCountTest test01", () => {

    let problem = new Problem();
    let expected = 2;

    let actual = problem.wordCount("Hello World");

    expect(actual).toEqual(expected);
});

test("wordCountTest test02", () => {

    let problem = new Problem();
    let expected = 4;

    let actual = problem.wordCount("Cowboys Suck Go Birds");

    expect(actual).toEqual(expected);
});


test("letterCapitalize test01", () => {

    let problem = new Problem();
    let expected = "Hello From California!";

    let actual = problem.letterCapitalize("hello from california!");

    expect(actual).toEqual(expected);
});

test("letterCapitalize test02", () => {

    let problem = new Problem();
    let expected = "Fly Eagles Fly, Cowboys Suck!";

    let actual = problem.letterCapitalize("fly eagles fly, cowboys suck!");

    expect(actual).toEqual(expected);
});

test("firstReverse test01", () => {

    let problem = new Problem();
    let expected = "sredoC dna dlroW olleH";

    let actual = problem.firstReverse("Hello World and Coders");

    expect(actual).toEqual(expected);
});

test("firstReverse test02", () => {

    let problem = new Problem();
    let expected =  "eiD syobwoC eiD ,ylF selgaE ylF";

    let actual = problem.firstReverse("Fly Eagles Fly, Die Cowboys Die");

    expect(actual).toEqual(expected);
});

// test("longestWord test01", () => {

//     let problem = new Problem();
//     let expected = "time";

//     let actual = problem.longestWord("fun&!! time");

//     expect(actual).toEqual(expected);
// });

// test("longestWord test02", () => {

//     let problem = new Problem();
//     let expected = "love";

//     let actual = problem.longestWord("I love dogs");

//     expect(actual).toEqual(expected);
// });

test("swapCase test01", () => {

    let problem = new Problem();
    let expected = "hELLO-lol";

    let actual = problem.swapCase("Hello-LOL");

    expect(actual).toEqual(expected);
});

test("swapCase test02", () => {

    let problem = new Problem();
    let expected = "sUP dude!!?";

    let actual = problem.swapCase("Sup DUDE!!?");

    expect(actual).toEqual(expected);
});