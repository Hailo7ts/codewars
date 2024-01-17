/**
 * Sort the odd
 * You will be given an array of numbers. You have to sort the odd numbers
 * in ascending order while leaving the even numbers at their original 
 * positions.
 */

function sortArray(array) {
    let sortedArray = []
    //copy array
    for(let i=0; i<array.length; i++){
      sortedArray[i] = array[i]
    }
    //sort array in ascending order
    sortedArray = sortedArray.filter((n)=> n%2 != 0).sort((a,b)=> a-b)
    
    //replace odd values in order in original array
    for(let i=0; i<array.length; i++){
      if(array[i]%2 != 0){
        array.splice(i,1,sortedArray.shift())
      }
    }
    
    return array
  }