/**
 * Greet Me
 * Write a method that takes one argument as name and then greets that name, 
 * capitalized and ends with an exclamation point.
 */

var greet = function(name) {
    name = name.toLowerCase().split('')
    name[0] = name[0].toUpperCase()
    return `Hello ${name.join('')}!`
  };