/**
 * Alphabet war
 * Introduction There is a war and nobody knows - the alphabet war! There are two groups of 
 * hostile letters. The tension between left side letters and right side letters was too high
 * and the war began. Task Write a function that accepts fight string consists of only small 
 * letters and return who wins the fight. When the left side wins return Left side wins!, 
 * when the right side wins return Right side wins!, in other case return Let's fight again!.
 * The left side letters and their power:
 *  w - 4
 *  p - 3
 *  b - 2
 *  s - 1
 * The right side letters and their power: 
 * m - 4
 * q - 3
 * d - 2
 * z - 1
 * The other letters don't have power and are only victims.
 * 
 * P: String
 * R: string
 * E:alphabetWar("z");        //=> Right side wins!
 * alphabetWar("zdqmwpbs"); //=> Let's fight again!
 * alphabetWar("zzzzs");    //=> Right side wins!
 * alphabetWar("wwwwwwz");  //=> Left side wins!
 * P:
 */

function alphabetWar(fight)
{
  let leftSide = 0
  let rightSide = 0
  
  fight.split('').forEach(l=>{
    switch(l){
      case 'w':
      leftSide +=4
      break;
      case 'm':
      rightSide +=4
      break;
      case 'p':
      leftSide +=3
      break;
      case 'q':
      rightSide +=3
      break;
      case 'd':
      rightSide +=2
      break;
      case 'b':
      leftSide +=2
      break;
      case 's':
      leftSide +=1
      break;
      case 'z':
      rightSide +=1
      break;
    }
  })
  
   return leftSide < rightSide? "Right side wins!": leftSide > rightSide ? "Left side wins!": "Let's fight again!"
}