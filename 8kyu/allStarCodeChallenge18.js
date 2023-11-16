/*
All Star Code Challenge #18
Create a function that accepts a string and a single character
, and returns an integer of the count of occurrences the 2nd 
argument is found in the first one.*/

function strCount(str, letter){  
    let count = 0
    //search string for char
    for(let i=0;i<str.length;i++){
        //count the number of times the char appears
      if(str[i] === letter){
        count++
      }
    }
    
    return count
  }