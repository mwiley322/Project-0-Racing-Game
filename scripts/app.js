$(document).ready(function() {
  var $player1 = $('#player1');
  var $player2 = $('#player2');
  var gameIsOn = false;
  var position1 = 0;
  var position2 = 0;

//USE ENTER TO BEGIN GAME
  $('body').keydown(function start(e){
    if ( e.which === 32 && !gameIsOn) { //if enter is pressed and game is off
      e.preventDefault();
      gameIsOn = !gameIsOn; //game is turned on
      movePlayers(); //and we can use the player keys to move the element
    }  //closes if statement
  }); // closes start keydown function

  function movePlayers () {
    $('body').keyup(function(e){
      e.preventDefault();
      if ( e.which === 39 && gameIsOn ) {
        position1+=10;
        $player2.animate({left: '+=10px'}, 0);
      } //closes if statement
      if ( e.which === 65 && gameIsOn) {
        position2+=10;
        $player1.animate({left: '+=10px'}, 0);
      } //closes if statement
      evaluateWin();
    }); // closes keydown function
  } // closes movePlayers function

function evaluateWin() {
  if (position2 === 100) {
    alert('Sully wins!');
    $('button').removeClass('hidden');
  } else if (position1 === 100){
    alert('Mike wins!');
    $('button').removeClass('hidden');
  } //closes if statement
}

//RESTART GAME WITH RESTART BUTTON
  $('.restart').click(function(){
    // if (gameIsOn === false) {
    //   gameIsOn = !gameIsOn;
    // }
    // countDown();
    gameIsOn = !gameIsOn;
    movePlayers();
    return gameIsOn;
  }); // closes start function



// Game constructor used every time new game entered, otherwise saved for score.
// Game start with method that uses key 32 only
// Player constructor used once for each player at page initializing with button click to start
// moves are specific to player.. player 1 = 18 to move, player 2= 39 to move

}); //closes ready function
