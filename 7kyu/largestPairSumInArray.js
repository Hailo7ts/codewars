/**
 * Largest pair sum in array
 * Given a sequence of numbers, find the largest pair sum in the sequence.
 */

function largestPairSum (numbers) {
    numbers.sort((a,b)=> a-b)
    return numbers[numbers.length-1]+numbers[numbers.length-2]
  }