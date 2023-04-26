const testing = require("../lib/testing.js");
const evenFibonacci = require("../src/main.js");

const it = testing.it;
const printHeadline = testing.printHeadline;
const showTestSummary = testing.showTestSummary;

const sumOfEvenFibonacci = evenFibonacci.sumOfEvenFibonacci

const runtest = function() {
  printHeadline("Sum of even fibonacci ");

  it("should give 44 for fibonacci below 80", {
    expected: 44,
    actual: sumOfEvenFibonacci(80)
  });

}

runtest();
showTestSummary();

