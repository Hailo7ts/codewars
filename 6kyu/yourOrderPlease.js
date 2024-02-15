/**
 * Your order, please
 * Your task is to sort a given string. Each word in the string will 
 * contain a single number. This number is the position the word should 
 * have in the result. Note: Numbers can be from 1 to 9. So 1 will be the 
 * first word (not 0). If the input string is empty, return an empty 
 * string. The words in the input String will only contain valid 
 * consecutive numbers.
 */

function order(words){
  
//check for empty string
  if(words === ""){
    return ""
  }
//loop through an array of words to sort strings in array
//according to their count value
  words = words.split(' ')
  
  let arr =[]
  let count = 1

 while(words.length > 0){
    for(let i=0; i<words.length; i++){
      if(words[i].includes(count)){
        arr.push(...words.splice(i,1))
        count++
      }
    }
 }
  
  return arr.join(" ")
}