// 1 2 3 5 8 13 21 34

const sumOfEvenFibonacci = function(threshold) {
  let first = 0;
  let second = 1;
  let third = 1;
  let sum = 0;

  do{
    if(third % 2 === 0) {
      sum = sum + third;
    }
    first = second;
    second = third;
    third = first + second;
  } while(third < threshold);

  return sum;
}

exports.sumOfEvenFibonacci = sumOfEvenFibonacci;
