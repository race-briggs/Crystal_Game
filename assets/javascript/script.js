$('document').ready(function(){

  //declare crystals as random number values
  var blueCrystal = Math.floor(Math.random()*12) + 1;
  var purpleCrystal = Math.floor(Math.random() * 12) + 1;
  var yellowCrystal = Math.floor(Math.random() * 12) + 1;
  var redCrystal = Math.floor(Math.random() * 12) + 1;

  //declare scores for the player and their goal
  var targetScore = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  console.log(targetScore);
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

  function updateScores(){
    $('.win-div').text(wins);
    $('.lose-div').text(losses);
    resetDom();
  }

  function resetDom(){
    $('.ts-div').text(targetScore);
    $('.cs-div').text(currentScore);
  }

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

  updateScores();
})