/**
 * Mumbling
 * This time no story, no theory. The examples below show you how to write
 * function accum: Examples: accum("abcd") -> "A-Bb-Ccc-Dddd" 
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 */

function accum(s) {
    s = s.toLowerCase().split('')
    let newArr = []
    
    //loop array adding uppercase letter first, then adding
    //the repeating letter based on j(index of letter)
    //then push a hyphen after array is updated with letters
    for(let i=0; i<s.length; i++){
      newArr.push(s[i].toUpperCase())
      for(let j=0; j<i; j++){
          newArr.push(s[i])
        }
      newArr.push('-')
    }
    
    //remover the final hyphen and return array as a string
    newArr.pop()
    return newArr.join('')
    
  }