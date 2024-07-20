/**
 * The Coupon Code
 * Story
 * Your online store likes to give out coupons for special occasions. 
 * Some customers try to cheat the system by entering invalid codes or 
 * using expired coupons.
 * Task
 * Your mission:
 * Write a function called checkCoupon which verifies that a coupon code 
 * is valid and not expired. A coupon is no more valid on the day AFTER 
 * the expiration date. All dates will be passed as strings in this format:
 * "MONTH DATE, YEAR".
 */

/**
 * P: String date "MONTH DATE, YEAR"
 * R: boolean
 * E:checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
 * checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
 * P: pseudo code
 */


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    //boolean flag
    let validCoupon = false
    
    //validate code
    if(enteredCode === correctCode){
      //create date objects for current and experation date
      let currentDay = new Date(currentDate)
      let lastDay = new Date(expirationDate)

      //validate date
      if(currentDay <= lastDay){
        validCoupon = true
      }
    }
    
    return validCoupon
  }