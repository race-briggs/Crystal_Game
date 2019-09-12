$('document').ready(function(){

  //declare crystals as random number values
  var blueCrystal = Math.floor(Math.random()*12) + 1;
  console.log(blueCrystal);
  var purpleCrystal = Math.floor(Math.random() * 12) + 1;
  console.log(purpleCrystal);
  var yellowCrystal = Math.floor(Math.random() * 12) + 1;
  console.log(yellowCrystal);
  var redCrystal = Math.floor(Math.random() * 12) + 1;
  console.log(redCrystal)

  //declare scores for the player and their goal
  var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  console.log(targetScore);
  var currentScore = 0;

  //declare win and loss trackers
  var wins = 0;
  var losses = 0;

  //resets variable values
  function resetGame(){
    blueCrystal = Math.floor(Math.random() * 12) + 1;
    console.log(blueCrystal);
    purpleCrystal = Math.floor(Math.random() * 12) + 1;
    console.log(purpleCrystal);
    yellowCrystal = Math.floor(Math.random() * 12) + 1;
    console.log(yellowCrystal);
    redCrystal = Math.floor(Math.random() * 12) + 1;
    console.log(yellowCrystal);
    targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    currentScore = 0; 
  }

  //checks for a win or loss
  function checkScores(){
    if (currentScore === targetScore) {
      alert('You Win!');
      wins++;
      resetGame();
      updateScores();

    } else if (currentScore > targetScore) {
      alert('You Lose!');
      losses++;
      resetGame();
      updateScores();

    }
  }

  //updates the scores on the HTML
  function updateScores(){
    $('.win-div').text(wins);
    $('.lose-div').text(losses);
    resetDom();
  }

  //resets targetScore dom and currentScore dom
  function resetDom(){
    $('.ts-div').text(targetScore);
    $('.cs-div').text(currentScore);
  }

  //crystal image click functions
  $('.blue-crystal').on('click', function(){
    currentScore += blueCrystal;

    $('.cs-div').text(currentScore);

    checkScores();
  })

  $('.purple-crystal').on('click', function () {
    currentScore += purpleCrystal;

    $('.cs-div').text(currentScore);

    checkScores();
  })

  $('.yellow-crystal').on('click', function () {
    currentScore += yellowCrystal;

    $('.cs-div').text(currentScore);

    checkScores();
  })

  $('.red-crystal').on('click', function () {
    currentScore += redCrystal;

    $('.cs-div').text(currentScore);

    checkScores();
  })

  //populates HTML with 0s for wins and losses on screen load
  updateScores();
})