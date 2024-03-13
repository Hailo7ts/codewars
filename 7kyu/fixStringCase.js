/**
 * Fix string case
 * In this Kata, you will be given a string that may have mixed uppercase 
 * and lowercase letters and your task is to convert that string to either
 * lowercase only or uppercase only based on: make as few changes as 
 * possible. if the string contains equal number of uppercase and 
 * lowercase letters, convert the string to lowercase.
 */

function solve(s){
    let lowerCaseCount =0
    s =s.split('')
      for(let i=0; i<s.length; i++){
      if(s[i].localeCompare(s[i].toLowerCase()) === 0){
        lowerCaseCount ++
      }
    }
  
  return lowerCaseCount < s.length/2 ? s.map(l=> l = l.toUpperCase()).join(''):s.map(l=> l = l.toLowerCase()).join('')
}