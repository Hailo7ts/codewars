/**
 * Multiplication table
 * Your task, is to create N×N multiplication table, of size provided in 
 * parameter.
 */

multiplicationTable = function(size) {
    let array =[]
    let count = 1
    
    //loop through array
    for(let row=0; row<size; row++){
      //create a 2d array
      array[row] = []
      for(let col=0; col<size; col++){
        //if first col value set to count value
        if(col === 0){
          array[row][col] = count
        //otherwise set array value to the previous array value + count value
        }else{
          array[row][col] = array[row][col-1] + count
        }
      }
      count++
    }
     
    return array
  }