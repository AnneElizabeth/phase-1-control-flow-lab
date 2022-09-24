function scuberGreetingForFeet(rideLength){
  //let rideLength;
  if (rideLength > 2500) {
    return 'No can do.';
  } else if (rideLength >= 2001 && rideLength <= 2499)  { 
      return 'I will gladly take your thirty bucks.';
    }
    else if (rideLength >= 401 && rideLength <= 2000){
      return 'That will be twenty bucks.'
    }
    else if (rideLength <= 400) {
      return 'This one is on me!'
    }
}

function ternaryCheckCity(coolCity){
  let myAnswer;
  coolCity === 'NYC' ? myAnswer = 'Ok, sounds good.' :  myAnswer = 'No go.';
  return myAnswer;
}

function switchOnCharmFromTip(tipReceived){
  let myReply;
  switch (tipReceived){
    case 'generous':
      myReply = 'Thank you so much.';
      break;
    case 'not as generous':
      myReply = 'Thank you.';
      break;
    default:
      myReply = 'Bye.'
      break;
  }

  return myReply;
}



/*

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
	switch (tipAmount) {
		case 'generous' : returnResponse = 'Thank you so much.'; break;
		case 'not as generous': returnResponse = 'Thank you.'; break;
		default : returnResponse = 'Bye.';
	}
	return returnResponse;
}
 */