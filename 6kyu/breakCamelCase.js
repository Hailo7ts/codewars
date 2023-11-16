/**
 * Break camelCase
 * Complete the solution so that the function will break up 
 * camel casing, using a space between words.
 */

// complete the function
function solution(string) {
    let str = ""
    //loop through string
      for(let i=0; i< string.length; i++){
        //if the char is lowercase add to string
        if(string[i] === string[i].toLowerCase()){
          str += string[i]
        //otherwise add a space and then add the char
        }else{
          str += " " + string[i]
        }
      }
    return str
  }