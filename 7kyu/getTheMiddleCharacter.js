/**
 * Get the Middle Character
 * You are going to be given a word. Your job is to return the
 * middle character of the word. If the word's length is odd, 
 * return the middle character. If the word's length is even, 
 * return the middle 2 characters.
 */

function getMiddle(s)
{
  //check if length is odd
  if(s.length % 2 != 0){
    //if odd return center nunmber
    return s.charAt(Math.floor(s.length/2))
  }else{
    //if even return two center numbers
    return s.charAt((s.length/2)-1) + s.charAt(s.length/2)
  }
}