/**
 * Convert string to camel case
 * Complete the method/function so that it converts dash/underscore 
 * delimited words into camel casing. The first word within the output 
 * should be capitalized only if the original word was capitalized (known 
 * as Upper Camel Case, also often referred to as Pascal case). The next 
 * words should be always capitalized. Examples
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * "The_Stealth-Warrior" gets converted to "TheStealthWarrior" * 
 */

function toCamelCase(str){
  
    if(str.includes('_')){
      str = str.replaceAll('_', ' ')
    }
    
    if(str.includes('-')){
      str = str.replaceAll('-', ' ')
    }
    
    str = str.split(' ')
    
    
    for(let i=1; i<str.length; i++){
      let letters = str[i].split('')
      
      letters[0] = letters[0].toUpperCase()
       
      str[i] = letters.join('')    
    }
    
    return str.join('')
  }