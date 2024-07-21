/**
 * Convert number to reversed array of digits
 * Given a random non-negative number, you have to return the digits of 
 * this number within an array in reverse order.
 * P: integer 
 * R: integer array
 * E:35231 => [1,3,2,5,3]
 * 0 => [0]
 * P:
 */

function digitize(n) {
    n = String(n).split('').reverse()
    
    return n.map(num => Number(num))
  }