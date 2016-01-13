var userPoint = 0;
var aiPoint = 0;

// Randomly picks either "rock", "paper", or "scissors"
function getAISelection() {
  var randomNumber = Math.ceil(Math.random()*3);
  console.log(randomNumber);
  if(randomNumber == 1) {
    return "rock";
  } 
  if(randomNumber==2){
    return "paper";
  }
 if(randomNumber==3){
   return "scissor";
 }
}


// This function picks the winner
function pickWinner(uservalue, aivalue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
if(uservalue =="paper" && aivalue == "scissor") {
aiPoint=aiPoint+1
       return "computer";
}       

else if(uservalue =="paper" && aivalue == "rock") {
    userPoint=userPoint+1
            return "user";
}

else if(uservalue =="scissor" && aivalue =="rock") {
   aiPoint=aiPoint=1
     return "computer";
     
}

else if(uservalue =="rock" && aivalue =="rock") {
     return "draw";
}

else if(uservalue =="rock" && aivalue =="scissor") {
    userPoint=userPoint+1
         return "user";
}

else if (uservalue =="scissor" && aivalue =="scissor") {
          return "draw";
}

else if (uservalue =="scissor" && aivalue =="paper") {
    userPoint=userPoint=1
     return "user" ;
}

else if (uservalue =="scissor" && aivalue =="paper") {
    userPoint=userPoint+1
           return "user";
}

else if(uservalue =="paper" && aivalue =="paper") {
    return "draw";
}

else if(user =="paper" && aivalue =="rock") {
    userPoint=userPoint+1
        return "user";
}}

// This function sets the scoreboard with the correct points
function setScore() {

}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue)
    
    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){

});
