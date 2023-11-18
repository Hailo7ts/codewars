/**
 * Double Char
 * Given a string, you have to return a string in which each 
 * character (case-sensitive) is repeated once.
 */

function doubleChar(str) {
    let newStr = ""
    
    //for each char add another one of itself to the str
    for(let i=0; i<str.length; i++){
      newStr += str[i] + str[i]
    }
    return newStr
  }