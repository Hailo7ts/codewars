/**
 * The Office III - Broken Photocopier
 * The bloody photocopier is broken... Just as you were sneaking around 
 * the office to print off your favourite binary code! Instead of copying 
 * the original, it reverses it: '1' becomes '0' and vice versa.
 * Given a string of binary, return the version the photocopier gives you as 
 * a string.
 */

function broken(x){
    //map x as an array and make changes
    x = x.split('').map(num => num === '1' ? num = '0': num = '1')
    
    //return x as string
    return x.join('')
  }