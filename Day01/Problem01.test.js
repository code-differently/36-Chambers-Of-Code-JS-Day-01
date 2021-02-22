const { TestScheduler } = require('jest');
const Problem = require('./Problem01');

test("wordCountTest test01", () => {

    let problem = new Problem();
    let expected = 2;

    let actual = problem.wordCount("G0 BROWNS!");

    expect(actual).toEqual(expected);
});

test("wordCountTest test02", () => {

    let problem = new Problem();
    let expected = 4;

    let actual = problem.wordCount("Not an Eagles Fan");

    expect(actual).toEqual(expected);
});


test("letterCapitalize test01", () => {

    let problem = new Problem();
    let expected = "Hello From Cybertron!";

    let actual = problem.letterCapitalize("Hello from Cybertron!");

    expect(actual).toEqual(expected);
});

test("letterCapitalize test02", () => {

    let problem = new Problem();
    let expected = "G-Town Bears Forever!";

    let actual = problem.letterCapitalize("G-Town Bears Forever!");

    expect(actual).toEqual(expected);
});

test("firstReverse test01", () => {

    let problem = new Problem();
    let expected = "STEP ON NO PETS";

    let actual = problem.firstReverse("STEP ON NO PETS");

    expect(actual).toEqual(expected);
});

test("firstReverse test02", () => {

    let problem = new Problem();
    let expected =  ".syobwoC ro selgaE rehtieN";

    let actual = problem.firstReverse("Neither Eagles or Cowboys.");

    expect(actual).toEqual(expected);
});

test("longestWord test01", () => {

    let problem = new Problem();
    let expected = "time";

    let actual = problem.longestWord("fun&!! time");

    expect(actual).toEqual(expected);
});

test("longestWord test02", () => {

    let problem = new Problem();
    let expected = "love";

    let actual = problem.longestWord("I love dogs");

    expect(actual).toEqual(expected);
});

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