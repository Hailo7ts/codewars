/**
 * Sum of Digits / Digital Root
 * Digital root is the recursive sum of all the digits in a number. Given n, take the sum of 
 * the digits of n. If that value has more than one digit, continue reducing in this way until
 * a single-digit number is produced. The input will be a non-negative integer.
 */

function digitalRoot(n) {
    n = String(n).split('')
    
    while(n.length >= 2 ){
      n = n.reduce((acc, c) => Number(acc)+ Number(c) ,0)
      n = String(n).split('')
    }
    
    return Number(n.join(''))
  }