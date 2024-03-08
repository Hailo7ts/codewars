/**
 * String Reversing, Changing case, etc.
 * Given 2 string parameters, show a concatenation of:
 * the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
 * a separator in between both strings: @@@
 * the 1st string reversed with inverted case and then mirrored; e.g 
 * Water -> RETAwwATER 
 */

function reverseAndMirror(s1,s2) {
  
    //reverse of the 2nd string with
    //a separator in between both strings: @@@
    s2 = s2.split('').reverse().join('')
    s2 += '@@@'
    
    
    //the 1st string reversed and then mirrored
    let s3 = s1  
    s3 = s3.split('').reverse().join('').concat(s1)
    s1 = s2.concat(s3).split('')
    
    //loop array to invert case
    for(let i=0; i<s1.length; i++){
      if(s1[i].localeCompare(s1[i].toLowerCase()) === 0){
        s1[i] = s1[i].toUpperCase()
         
      }else{
        s1[i] = s1[i].toLowerCase()
      }
    }
    s1 = s1.join('')
      
    return s1;
  }