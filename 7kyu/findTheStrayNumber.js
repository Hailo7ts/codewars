/**
 * Find the stray number
 * You are given an odd-length array of integers, in which all of them are
 * the same, except for one single number. Complete the method which 
 * accepts such an array, and returns that single different number. The 
 * input array will always be valid! (odd-length >= 3)
 */

function stray(numbers) {
    //sort numbers
    numbers.sort((a,b) => a-b)
    //determine if stray number is at the start or end of array
    return numbers[0] != numbers[1] ? numbers[0]: numbers[numbers.length-1]
  
  }