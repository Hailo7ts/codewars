/**
 * Find the unique number
 * There is an array with some numbers. All numbers are equal 
 * except for one. Try to find it!
 */
function findUniq(arr) {
    arr.sort()
    
    return arr[0] != arr[1] ? arr[0] : arr[arr.length-1]
  }