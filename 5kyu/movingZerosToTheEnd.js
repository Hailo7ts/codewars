/**
 * Moving Zeros To The End
 * Write an algorithm that takes an array and moves all of the zeros to 
 * the end, preserving the order of the other elements.
 */

function moveZeros(arr) {

    let n = arr.length; 
    let B = new Array(n); 
    let j = 0; 
    let count = 0; 
    
    arr.forEach((item, index) =>{
     if (arr[index] !== 0) { 
        B[j] = arr[index]; 
        j++; 
     } 
     else { 
        count++; 
      } 
    })
    
    
    while (count > 0) { 
      B[j] = 0
      count--
      j++
    } 
    
    for (let i = 0; i < n; i++) { 
      arr[i] = B[i]
    } 
    
  
    return arr
  }