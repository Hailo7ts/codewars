/**
 * Beginner Series #3 Sum of Numbers
 * Given two integers a and b, which can be positive or negative,
 * find the sum of all the integers between and including them 
 * and return it. If the two numbers are equal return a or b
 */

function getSum(a, b)
{
  let sum = 0
  
  //determin if loop needs to increment
  if(a < b){
    for(let i=a; i<=b; i++){
    sum += i
    }
  //or decrement
  }else{
    for(let i=a; i>=b; i--){
    sum += i
    }
  }
  
  return sum
}