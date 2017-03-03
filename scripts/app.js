$(document).ready(function() {
  var $player1 = $('#monster1');
  var $player2 = $('#monster2');
  var gameIsOn = false;


//USE SHIFT TO BEGIN GAME
  $('body').keydown(function(e){
    if ( e.which === 32 && !gameIsOn) { //if enter is pressed and game is off
    e.preventDefault();
    gameIsOn = !gameIsOn; //game is turned on
    gameState(); //and we can use the player keys to move the element
    }  //closes if statement
  }); // closes keydown function


function gameState () {
  $('body').bind('keydown', function(e) {
  // $('body').keydown(function(e){
    if ( e.which === 18 && gameIsOn) {
      e.preventDefault();
      $('#monster1').animate({left: '20px'});
    } else if ( e.which === 39 && gameIsOn ) {
      e.preventDefault();
      $('#monster2').animate({left: '20px'});
     } //closes else statement
   }); // closes keydown function
} // closes gameState function

$('body').keydown(function(e) {
  gameState();
}); // closes keydown function


//RESTART GAME WITH RESTART BUTTON
  $('.restart').click(function(){
    // if (gameIsOn === false) {
    //   gameIsOn = !gameIsOn;
    // }
    // countDown();
    gameIsOn = !gameIsOn;
    gameState();
    return gameIsOn;
  }); // closes start function



// Game constructor used every time new game entered, otherwise saved for score.
// Game start with method that uses key 32 only
// Player constructor used once for each player at page initializing with button click to start
// moves are specific to player.. player 1 = 18 to move, player 2= 39 to move

}); //closes ready function
