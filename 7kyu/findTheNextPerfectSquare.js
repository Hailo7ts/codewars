/**
 * Find the next perfect square!
 * You might know some pretty large perfect squares. But what about the 
 * NEXT one? Complete the findNextSquare method that finds the next 
 * integral perfect square after the one passed as a parameter. Recall that
 * an integral perfect square is an integer n such that sqrt(n) is also an
 * integer. If the parameter is itself not a perfect square then -1 should
 * be returned. You may assume the parameter is non-negative.
 */

function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    //find sqrt to see if it is a perfect square
    let sqrt = Math.sqrt(sq)
    
    //if it is a whole number return the next perfect sq else return -1
    return Number.isInteger(sqrt) ? Math.pow(sqrt+1,2) : -1
  }