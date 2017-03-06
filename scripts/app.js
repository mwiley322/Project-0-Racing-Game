$(document).ready(function() {
  var $player1 = $('#player1');
  var $player2 = $('#player2');
  var gameIsOn = false;
  var position1 = 0;
  var position2 = 0;


//USE SPACEBAR TO BEGIN GAME
  $('*').keydown(function start(e){
    if ( e.which === 32 && !gameIsOn) { //if enter is pressed and game is off
      e.preventDefault();
      gameIsOn = !gameIsOn; //game is turned on
      $('h3').addClass('hidden');
      countDown(3, '#countdown');
      movePlayers(); //and we can use the player keys to move the element
    }  //closes if statement
  }); // closes start keydown function

  function movePlayers () {
    $('body').keyup(function(e){
      e.preventDefault();
      if ( e.which === 39 && gameIsOn ) {
        position1+=15;
        $player2.animate({left: '+=15px'}, 0).toggleClass('transform');
      } //closes if statement
      if ( e.which === 65 && gameIsOn) {
        position2+=15;
        $player1.animate({left: '+=15px'}, 0).toggleClass('transform');
      } //closes if statement
      evaluateWin();
    }); // closes keydown function
  } // closes movePlayers function

  function evaluateWin() {
    if (position2 === 1140 && position1 !== 1140) {
      alert('Sully wins!');
      $('button').removeClass('hidden');
      $('h3').removeClass('hidden');
      $player1.animate({left: '0'});
      $player2.animate({left: '0'});
      position1 = 0;
      position2 = 0;
      gameIsOn = false;
    } else if (position1 === 1140 && position2 !== 1140){
      alert('Mike wins!');
      $('button').removeClass('hidden');
      $('h3').removeClass('hidden');
      $player1.animate({left: '0'});
      $player2.animate({left: '0'});
      position1 = 0;
      position2 = 0;
      gameIsOn = false;
    } //closes if statement
  } //closes evaluateWin function
}); //closes ready function


// GLOBAL FUNCTIONS BELOW

function countDown(sec, e) {
  if (sec === 0) {
    $(e).html('Go!');
    clearTimeout(timer);
    gameIsOn = true;
   } else {
     $(e).addClass('infinite animated fadeIn').html(sec);
     sec--;
  } // closes else statement
  var timer = setTimeout('countDown('+sec+', "'+e+'")', 1000);
} // closes countdown function

$('.restart').click(function(){
  countDown(3, '#countdown');
  gameIsOn = !gameIsOn;
  movePlayers();
  $('button').addClass('hidden');
  $('h3').addClass('hidden');
  return gameIsOn;
}); // closes start function
