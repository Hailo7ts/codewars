/**
 * Reverse words
 * Complete the function that accepts a string parameter, and reverses 
 * each word in the string. All spaces in the string should be retained.
 */

function reverseWords(str) {
    str = str.split('').reverse().join('').split(' ')
    let s = []
    let length = str.length
    
    for(let i=0; i<length; i++){
      s[i] = str.pop()
    }
  
    return s.join(' ')
  }