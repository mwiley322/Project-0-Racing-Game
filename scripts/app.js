$(document).ready(function() {
  var $player1 = $('#monster1');
  var $player2 = $('#monster2');

  $('body').keydown(function(e){
    if ( e.which == 39 ) {
      e.preventDefault();
      console.log('Player 2 move');
    } else if ( e.which == 18 ) {
      e.preventDefault();
      console.log('Player 1 move');
    } //closes else statement
  }); // closes keydown function
  // $('body').keydown(function(e){
  //   if ( e.which == 39 ) {
  //     e.preventDefault();
  //     console.log('Player 2 move');
  //   } else if ( e.which == 18 ) {
  //     e.preventDefault();
  //     console.log('Player 1 move');
  //   }
  // });

$('.restart').click(function(){
  //reset player position
    // countDown();
}); // closes restart function


// } else if ( e.which == 32 ) {
//   e.preventDefault();
//   console.log('Game entered');

// Game constructor used every time new game entered, otherwise saved for score.
// Game start with method that uses key 32 only
// Player constructor used once for each player at page initializing with button click to start
// moves are specific to player.. player 1 = 18 to move, player 2= 39 to move



  // setInterval(movePlane, 20);
// var keys = {}
//
// $('.gameboard').keydown(function(e) {
//     keys[e.keyCode] = true;
// });
//
// $(document).keyup(function(e) {
//     delete keys[e.keyCode];
// });
//
// function movePlayer() {
//     for (var direction in keys) {
//         if (!keys.hasOwnProperty(direction)) continue;
//         if (direction == 37) {
//             $(".player").animate({left: "-=5"}, 0);
//         }
//         if (direction == 38) {
//             $(".player").animate({top: "-=5"}, 0);
//         }
//         if (direction == 39) {
//             $(".player").animate({left: "+=5"}, 0);
//         }
//         if (direction == 40) {
//             $(".player").animate({top: "+=5"}, 0);
//         }
//     }
// }

}); //closes ready function
