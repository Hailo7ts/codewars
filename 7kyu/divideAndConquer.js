/**
 * Divide and Conquer
 * Given a mixed array of number and string representations of integers, 
 * add up the non-string integers and subtract the total of the string 
 * integers. Return as a number.
 */

function divCon(x){
    let sum1 =  x.filter(num => Number.isInteger(num)).reduce((acc,c) => acc + c ,0)
    let sum2 =  x.filter(num => !Number.isInteger(num)).reduce((acc,c) =>  acc + Number(c) ,0)
    return sum1 - sum2
  }
 