/**
 * Factorial
 * Your task is to write function factorial.
 * https://en.wikipedia.org/wiki/Factorial
 */

function factorial(n){
    let product = 1
    while(n>0){
      product *= n
      n--
    }
    return product
  }