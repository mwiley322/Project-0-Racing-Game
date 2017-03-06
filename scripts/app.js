// GLOBAL FUNCTIONS BELOW

function removeCountDown() {
  $('#countdown').addClass('hidden');
} //closes removeCountDown function

function countDown(sec, e) {
  if (sec === 0) {
    $(e).html('Go!').css('left', '25%');
    clearTimeout(timer);
   } else {
     $(e).addClass('infinite animated fadeIn').html(sec);
     sec--;
  } // closes else statement
  var timer = setTimeout('countDown('+sec+', "'+e+'")', 1000);
} // closes countdown function


// DOM READY BELOW
$(document).ready(function() {
  var $player1 = $('#player1');
  var $player2 = $('#player2');
  var gameIsOn = false;
  var position1 = 0;
  var position2 = 0;


  //USE SPACEBAR TO BEGIN GAME
  $('*').keydown(function start(e){
    if ( e.which === 32 && !gameIsOn) {
      e.preventDefault();
      $('h3').addClass('hidden');
      countDown(3, '#countdown');
      window.setTimeout(removeCountDown, 4000);
      gameIsOn = !gameIsOn; //game is turned on
      window.setTimeout(movePlayers, 4000); //and we can use the player keys to move the element
    }  //closes if statement
  }); // closes start keydown function

  //MOVE (A) OR RIGHT ARROW TO ANIMATE CHARACTER
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

  //CHECK CHARACTER POSITION AND RESET VALUES
  function evaluateWin() {
    if (position2 === 1140 && position1 !== 1140) {
      $('h3').removeClass('hidden');
      $('h3').text('Sully wins!');
      $('button').removeClass('hidden');
      $player1.animate({left: '0'});
      $player2.animate({left: '0'});
      position1 = 0;
      position2 = 0;
      gameIsOn = false;
    } else if (position1 === 1140 && position2 !== 1140){
      $('h3').removeClass('hidden');
      $('h3').text('Mike Wazowski wins!');
      $('button').removeClass('hidden');
      $player1.animate({left: '0'});
      $player2.animate({left: '0'});
      position1 = 0;
      position2 = 0;
      gameIsOn = false;
    } //closes if statement
  } //closes evaluateWin function

  //RESTART GAME ON BUTTON CLICK
  $('.restart').click(function(){
    window.location.reload();
  }); // closes restart function

}); //closes ready function
