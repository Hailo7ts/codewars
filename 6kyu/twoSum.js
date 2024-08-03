/**
 * Two Sum
 * Write a function that takes an array of numbers (integers for the tests) and a target 
 * number. It should find two different items in the array that, when added together, give 
 * the target value. The indices of these items should then be returned in a tuple / list 
 * (depending on your language) like so: (index1, index2). For the purposes of this kata, 
 * some tests may have multiple answers; any valid solutions will be accepted. The input 
 * will always be valid (numbers will be an array of length 2 or greater, and all of the 
 * items will be numbers; target will always be the sum of two different items from that 
 * array).
 * 
 * P: array of numbers(integers) target(number as integer)
 * R: array containing the index of two numbers that give the sum equal to the target
 * E:twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
 * twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]
 * P: loop through numbers array to sum two numbers
 * check if the sum is equal to target, if it is and push the index to the return array
 * only take sum if i and j are not at the same index
 */

function twoSum(numbers, target) {
    let sumArr = []
    let sum = 0
    
    //loop through numbers array to sum two numbers
    for(let i=0; i<numbers.length; i++){
      for(let j=1; j<numbers.length; j++){
        //only take sum if i and j are not at the same index
        if(i != j){
          sum = numbers[i] + numbers[j]
        }
        
        //check if the sum is equal to target, if it is
        //and push the index to the return array
        if(sum === target){
          sumArr.push(i)
          sumArr.push(j)
        }
      }
    }
    
      return sumArr;
  }

