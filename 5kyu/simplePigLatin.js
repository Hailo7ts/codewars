/**
 * Simple Pig Latin
 * Move the first letter of each word to the end of it, then add "ay" to 
 * the end of the word. Leave punctuation marks untouched.
 */

function pigIt(str){
 
    str = str.split(' ').map((word)=>{
      word = word.split('')
      
      firstLetter = word[0]
      word = word.slice(1)
     
      word.push(firstLetter)
      word = word.join('')
          
      return  word
    })
    
    if(str[str.length-1] === '!' || str[str.length-1] === '?'){
      str = str.map((word, i) => (i !=  str.length-1) ? word += 'ay': word)
    }else{
      str = str.map(word => word += 'ay')
    }
    
            
    return str.join(' ')
  }