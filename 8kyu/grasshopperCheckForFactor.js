/**
 * Grasshopper - Check for factor
 * This function should test if the factor is a factor of base.
 * Return true if it is a factor or false if it is not.
 * About factors
 * Factors are numbers you can multiply together to get another number.
 * 2 and 3 are factors of 6 because: 2 * 3 = 6You can find a factor by 
 * dividing numbers. If the remainder is 0 then the number is a factor.
 * You can use the mod operator (%) in most languages to check for a 
 * remainder For example 2 is not a factor of 7 because: 7 % 2 = 1
 * Note: base is a non-negative number, factor is a positive number.
 * 
 * P: 2 integer numbers positive
 * R: boolean
 * E:Test.assertEquals(checkForFactor(10,2), true)
    Test.assertEquals(checkForFactor(63,7), true)
    Test.assertEquals(checkForFactor(2450,5), true)
    Test.assertEquals(checkForFactor(24612,3), true)
 * P:
 */

function checkForFactor (base, factor) {
    // code here
    let quotient = base/factor
    return  Number.isInteger(quotient)
  }