/**
 * Sum of Multiples
 * Find the sum of all multiples of n below m Keep in Mindn and m are 
 * natural numbers (positive integers) m is excluded from the multiples
 */

function sumMul(n,m){
    let sum =0
    if(n <1 || m < 0){
      return 'INVALID'
    }else{
       for(let i=n; i<m; i+=n){
         sum+=i
       }
    }
     return sum
   }