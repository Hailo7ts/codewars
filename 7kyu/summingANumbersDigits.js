/**
 * Summing a number's digits
 * Write a function named sumDigits which takes a number as input and 
 * returns the sum of the absolute value of each of the number's decimal 
 * digits. For example: (Input --> Output) 10 --> 1  99 --> 18  -32 --> 5
 * Let's assume that all numbers in the input will be integer values.
 */

function sumDigits(number) {
 
    //convert integer to string
    number = '' + Math.abs(number)
    
    //form array with first reduce and sum with second reduce
    return [...number].reduce((acc, c) => acc.concat(+c), []).reduce((acc,c) => acc+c ,0)
  }
  