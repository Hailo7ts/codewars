/**
 * Highest and Lowest
 * 
 * In this little assignment you are given a string of space separated 
 * numbers, and have to return the highest and lowest number.
 */

function highAndLow(numbers){
    //numbers to array
    numbers = numbers.split(" ").sort((a,b) => a-b)
  
    return [numbers[numbers.length-1], numbers[0]].join(' ')
  }