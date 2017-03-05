$(document).ready(function() {
  var $player1 = $('#player1');
  var $player2 = $('#player2');
  var gameIsOn = false;
  var position1 = 0;
  var position2 = 0;

//USE ENTER TO BEGIN GAME
  $('*').keydown(function start(e){
    if ( e.which === 32 && !gameIsOn) { //if enter is pressed and game is off
      e.preventDefault();
      gameIsOn = !gameIsOn; //game is turned on
      // countDown();
      movePlayers(); //and we can use the player keys to move the element
    }  //closes if statement
  }); // closes start keydown function

  function movePlayers () {
    $('body').keyup(function(e){
      e.preventDefault();
      if ( e.which === 39 && gameIsOn ) {
        position1+=15;
        $player2.animate({left: '+=15px'}, 0);
      } //closes if statement
      if ( e.which === 65 && gameIsOn) {
        position2+=15;
        $player1.animate({left: '+=15px'}, 0);
      } //closes if statement
      evaluateWin();
    }); // closes keydown function
  } // closes movePlayers function

function evaluateWin() {
  if (position2 === 1140) {
    alert('Sully wins!');
    $('button').removeClass('hidden');
  } else if (position1 === 1140){
    alert('Mike wins!');
    $('button').removeClass('hidden');
  } //closes if statement
}

// function countDown() {
//   // for (var i = 3; i >= 0; i-- ){
//   var counter = 3;
//     if (i === 0) {
//       $('#countdown').setTimeout('Go!');
//     } else {
//       $('#countdown').append(i);
//       counter--;
//     } // closes else statement
//   // } // closes for loop
// } // closes countDown function

//RESTART GAME WITH RESTART BUTTON
  $('.restart').click(function(){
    // if (gameIsOn === false) {
    //   gameIsOn = !gameIsOn;
    // }
    // countDown();
    gameIsOn = !gameIsOn;
    movePlayers();
    $('button').addClass('hidden');
    $player1.animate({left: '0'});
    $player2.animate({left: '0'});
    position1 = 0;
    position2 = 0;
    return gameIsOn;
  }); // closes start function


}); //closes ready function
