/**
 * Two to One
 * Take 2 strings s1 and s2 including only letters from a to z. Return a 
 * new sorted string, the longest possible, containing distinct letters - 
 * each taken only once - coming from s1 or s2.
 */

function longest(s1, s2) {
    let str = s1+s2
    str= str.split('') 
    str.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
     
    let arr = []
    for(let i=0; i<str.length; i++){
      if(str[i] != arr[arr.length-1]){
        arr.push(str[i])
      }
    }
    return arr.join('')
  }
