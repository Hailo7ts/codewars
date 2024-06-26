/**
 * Matrix Addition
 * Write a function that accepts two square matrices (N x N two 
 * dimensional arrays), and return the sum of the two. Both matrices being
 * passed into the function will be of size N x N (square), containing 
 * only integers. How to sum two matrices: Take each cell [n][m] from the 
 * first matrix, and add it with the same [n][m] cell from the second 
 * matrix. This will be cell [n][m] of the solution matrix. (Except for C 
 * where solution matrix will be a 1d pseudo-multidimensional array).
 */


function matrixAddition(a, b){
    let sum = []
    
     for(let row=0; row<a[0].length; row++){
       sum[row] = []
       for(let col =0; col<b.length; col++){
         sum[row][col] = a[row][col] + b[row][col]
       }
       
     }
     
     return sum
   }