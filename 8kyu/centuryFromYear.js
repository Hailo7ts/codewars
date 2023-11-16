/*Century From Year
The first century spans from the year 1 up to and including the 
year 100, the second century - from the year 101 up to and 
including the year 200, etc.
*/

function century(year) {
    //round up year and divide by 100
    return Math.ceil(year/100)
  }