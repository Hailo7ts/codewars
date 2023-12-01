/**
 * Remove exclamation marks
 * Write function RemoveExclamationMarks which removes all exclamation 
 * marks from a given string.
 */



/*initial attempt
function removeExclamationMarks(s) {
    //filter all '!' out of string
    return s.split('').filter((e)=> e != '!').join('');
  }*/

  function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }