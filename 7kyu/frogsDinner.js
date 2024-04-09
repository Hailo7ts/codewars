/**
 * Frog's Dinner
 * You are sat with two frogs on a log, Chris and Tom. They are arguing 
 * about who ate the most flies (Poor flies, but what you going to do!). 
 * Chris says "I ate the summation of n number of flies!". Tom replies 
 * "Take half the number you ate then round it down and work out the 
 * summation of that, that is how many I ate"! Cat then hops onto the log 
 * looking pleased with herself "Well, I ate the summation of both your 
 * dinners combined." Loz who came late to this meeting of amphibians is 
 * very confused, he asks "So how many did each of you eat?" Write a 
 * function called frogContest which returns a string "Chris ate {number} 
 * flies, Tom ate {number} flies and Cat ate {number} flies" {number} is 
 * the integer value of the amount of flies eaten by each.
 */

//Return the string in the description with the number of flies eaten for each frog.
function frogContest(n) {
    let chrisSum = sum(n)
    let tomSum = sum(Math.floor(chrisSum/2))
    let catSum = sum(chrisSum+tomSum)
    
    
    return `Chris ate ${chrisSum} flies, Tom ate ${tomSum} flies and Cat ate ${catSum} flies`
  }
    
  const sum = n =>{
    let total = 0
    for(let i=0; i<=n; i++){
      total += i
    }
    return total
  }