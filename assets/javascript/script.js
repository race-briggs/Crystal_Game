$('document').ready(function(){

  //declare crystals as random number values
  var blueCrystal = Math.floor(Math.random()*12) + 1;
  var purpleCrystal = Math.floor(Math.random() * 12) + 1;
  var yellowCrystal = Math.floor(Math.random() * 12) + 1;
  var redCrystal = Math.floor(Math.random() * 12) + 1;

  //declare scores for the player and their goal
  var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  var currentScore = 0;

  //declare win and loss trackers
  var wins = 0;
  var losses = 0;

  function resetGame(){
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    purpleCrystal = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    redCrystal = Math.floor(Math.random() * 12) + 1;
    targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    currentScore = 0; 
  }

})