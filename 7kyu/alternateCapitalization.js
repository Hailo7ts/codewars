/**
 * Alternate capitalization
 * Given a string, capitalize the letters that occupy even indexes and odd
 *  indexes separately, and return as shown below. Index 0 will be 
 * considered even. For example, capitalize("abcdef") = 
 * ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 */

function capitalize(s){
    s = s.split('')
    let arr = []
    for(let i=0; i<s.length; i++){
      if(i % 2 === 0){
        s[i] = s[i].toUpperCase()
      }
    }
    arr[0] = s.join('')
    for(let i=0; i<s.length; i++){
      if(i % 2 === 0){
        s[i] = s[i].toLowerCase()
      }else{
        s[i] = s[i].toUpperCase()
      }
    }
    arr[1] = s.join('')
    return arr
  };