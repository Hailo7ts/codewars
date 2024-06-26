/**
 * Find the missing letter
 * Write a method that takes an array of consecutive (increasing) letters 
 * as input and that returns the missing letter in the array. You will 
 * always get an valid array. And it will be always exactly one letter be 
 * missing. The length of the array will always be at least 2. The array 
 * will always contain letters in only one case. Example:
 * ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
 * (Use the English alphabet with 26 letters!) 
 */

function findMissingLetter(array)
{
  let missingLetter = 0
  
  //convert char to ascii value
  array = array.map((l,i)=> l.charCodeAt())
  
  //find the number that isn't incremented by one
  for(let i=1; i<array.length; i++){
    if(array[i-1]+1 != array[i]){
      missingLetter = array[i-1]+1
    }
  }
  
  //return found value converted back to char
  return String.fromCharCode(missingLetter)
}