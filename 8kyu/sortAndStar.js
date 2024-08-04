/**
 * Sort and Star
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and 
 * based on the ASCII values of the chars) and then return the first value. The returned 
 * value must be a string, and have "***" between each of its letters. You should not remove 
 * or add elements from/to the array.
 * P: string of words
 * R: the first alphabetically sorted word and between each letter is three '*'
 * E:assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", 
 * "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
 * assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", 
 * "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 
 * P:sort alphabetically, return first value followed by *** each letter
 */

function twoSort(s) {
    //sort alphabetically
    s = s.sort()
    
    //return first value followed by *** each letter
    let word = s[0].split('')
    for(let i=0; i<word.length-1; i++){
      word[i] += '***'
    }
    
    return word.join('')
  }