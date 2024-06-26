/**
 * Is a number prime?
 * Define a function that takes an integer argument and returns a logical 
 * value true or false depending on if the integer is a prime. Per 
 * Wikipedia, a prime number ( or a prime ) is a natural number greater 
 * than 1 that has no positive divisors other than 1 and itself.
 * Requirements
 * You can assume you will be given an integer input. You can not assume 
 * that the integer will be only positive. You may be given negative 
 * numbers as well ( or 0 ). NOTE on performance: There are no fancy 
 * optimizations required, but still the most trivial solutions might 
 * time out. Numbers go up to 2^31 ( or similar, depending on language ). 
 * Looping all the way up to n, or n/2, will be too slow.
 */


function isPrime(num) {
    // Check if n=1 or n=0 
      if (num <= 1){
        return false; 
      }      
      // Check if n=2 or n=3 
      else if (num == 2 || num == 3){
        return true; 
      }        
      // Check whether n is divisible by 2 or 3 
      else if (num% 2 == 0 || num % 3 == 0){
        return false;
      } 
    
      // Check from 5 to square root of n 
      // Iterate i by (i+6) 
      for (var i = 5; i <= Math.sqrt(num); i = i + 6){
        if (num % i == 0 || num % (i + 2) == 0){
           return false; 
        }
             
      }
            
      return true; 
  } 

  //function is O(sqrt(n))