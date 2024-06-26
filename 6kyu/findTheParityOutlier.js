/**
 * Find The Parity Outlier
 * You are given an array (which will have a length of at least 3, but 
 * could be very large) containing integers. The array is either entirely 
 * comprised of odd integers or entirely comprised of even integers except 
 * for a single integer N. Write a method that takes the array as an 
 * argument and returns this "outlier" N.
 */

function findOutlier(integers){
    let evenArr = integers.filter(num => num % 2 === 0)
    let oddArr = integers.filter(num => num % 2 != 0)
    
    return evenArr.length > 1 ? oddArr[0]: evenArr[0]
  }