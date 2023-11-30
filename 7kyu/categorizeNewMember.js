/**
 * Categorize New Member
 * Input
 * Input will consist of a list of pairs. Each pair contains information 
 * for a single potential member. Information consists of an integer for 
 * the person's age and an integer for the person's handicap.
 * Output
 * Output will consist of a list of string values (in Haskell and C: Open 
 * or Senior) stating whether the respective member is to be placed in the
 * senior or open category.
 */


function openOrSenior(data){
    return data.map( ([age, handicap]) => age >54 && handicap >7 ? "Senior": "Open")
  }

//first attempt
/*function openOrSenior(data){
    let member = []
    //loop 2D array
    for(let i =0; i<data.length; i++){
      for(let j=0; j<data.length; j++){
        //check for requirements
        if(data[i][0] >= 55 && data[i][1] > 7){
          member[i] = "Senior"
        }else{
         member[i] = "Open"
       }
      }//end internal loop
      
    }//end external loop
    
    return member
  }*/
