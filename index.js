function scuberGreetingForFeet(ride){
  // Write your code here!
  let rideResult;
  //if ride <= 400ft, the ride is free!
  if(ride <= 400){
    rideResult = "This one is on me!";
    return rideResult;
  }
  //else if ride >= 2000 and < 2500, charge $30
  else if(ride >= 2000 && ride < 2500){
    rideResult = "I will gladly take your thirty bucks.";
    return rideResult;
  }
  //else if ride >= 2500, not allowed
  else if(ride >= 2500){
    rideResult = "No can do.";
    return rideResult;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let cityResult;
  //if city is NYC, allowed
  if(city === "NYC"){
    cityResult = "Ok, sounds good.";
    return cityResult;
  }
  //else if city is not NYC, not allowed
  else if(city !== "NYC"){
    cityResult = "No go.";
    return cityResult;
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipResult;
  //if tip is generous, thank you so much
  if(tip === "generous"){
    tipResult = "Thank you so much.";
    return tipResult;
  }
  //else if tip is not as generous, thank you
  else if(tip === "not as generous"){
    tipResult = "Thank you.";
    return tipResult;
  }
  //else anything, bye
  else {
    tipResult = "Bye.";
    return tipResult;
  }
}