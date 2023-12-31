/**
 * Switch it Up!
 * When provided with a number between 0-9, return it in words. Input :: 1
 * Output :: "One".
 */

function switchItUp(number){
    switch(number){
        case 0:
          number = 'Zero'
          break;
        case 1:
          number = 'One'
          break;
        case 2:
          number = 'Two'
          break;
        case 3:
          number = 'Three'
          break;
        case 4:
          number = 'Four'
          break;
        case 5:
          number = 'Five'
          break;
        case 6:
          number = 'Six'
          break;
        case 7:
          number = 'Seven'
          break;
        case 8:
          number = 'Eight'
          break;
        case 9:
          number = 'Nine'
          break;     
    }
    return number
  }