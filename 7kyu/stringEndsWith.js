/**
 * String ends with?
 * Complete the solution so that it returns true if the first 
 * argument(string) passed in ends with the 2nd argument (also 
 * a string).
 */


function solution(str, ending){
    // TODO: complete
    //initial code
    //return str.slice(-ending.length) === ending || ending === ('') ? true:false
    //refactored code
    return str.endsWith(ending)
  }