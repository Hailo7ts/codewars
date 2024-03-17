/**
 * Encrypt this!
 * You want to create secret messages which can be deciphered by the 
 * Decipher this! kata. Here are the conditions:
 * Your message is a string containing space separated words.
 * You need to encrypt each word in the message using the following rules:
 * The first letter must be converted to its ASCII code.
 * The second letter must be switched with the last letter
 * Keepin' it simple: There are no special characters in the input.
 */

var encryptThis = function(text) {
    text = text.split(' ')
    
    for(let i=0; i<text.length; i++){
      let word = text[i].split('')//break each word into an array of letters
      
      for(let j=0; j<word.length; j++){
        if(j === 0){//step one 1st letter to ASCII code
          word[j] = word[j].charCodeAt()
        }else if(j === 1){//step two swap second and last letter
          let lastLetter = word.pop()
          let secondLetter = word[j]
        
          word.splice(j,1,lastLetter)
          word.push(secondLetter)
      }
        text[i] = word.join('')//update encrypted word
      }
    }
    
    return text.join(' ')
  }