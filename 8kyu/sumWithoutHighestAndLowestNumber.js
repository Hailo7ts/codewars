/**
 * Sum without highest and lowest number
 * Sum all the numbers of a given array ( cq. list ), except the highest 
 * and the lowest element ( by value, not by index! ). The highest or 
 * lowest element respectively is a single element at each edge, even if 
 * there are more than one with the same value. If an empty value 
 * ( null, None, Nothing etc. ) is given instead of an array, or the given
 * array is an empty list or a list with only 1 element, return 0.
 */

function sumArray(array) {
    let sum = 0
    if(array != null && array.length > 1){
      array.sort((a,b)=> a-b)
      array.shift()
      array.pop()
      sum = array.reduce((acc,c) => acc+c ,0)
    }else{
      sum = 0
    }
    return sum
  }