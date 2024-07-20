/**
 * Array plus array
 * I'm new to coding and now I want to get the sum of two arrays... 
 * Actually the sum of all their elements. I'll appreciate for your help.
 * P.S. Each array includes only integer numbers. Output is a number too.
 */

//P: two arrays, numbers, integers, positive, and negative
//R: integer sum of two arrays
/**
 * E:arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
 */
//P: concat two arrays, reduce arrays to get sum, return sum

function arrayPlusArray(arr1, arr2) {
    //concat two arrays
    arr1= arr1.concat(arr2)

    //reduce arrays to get sum
    let sum = arr1.reduce((acc,c) => c+acc, 0)

    return sum;
  }
