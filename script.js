$(function(){

  // global variables to save entered values
  var counter = 0;
  var oMoves = [];
  var xMoves = [];

  // function to set up listeners
  function listeners() {
    $('td').click(function(event){
      // counter to change turn
      counter ++;
      if (counter % 2 === 0) {
        $(this).addClass('X').html("X");
          xMoves.push($(this).attr('data-num'));
          console.log("--- x", xMoves);
          checkForWin(xMoves);
      } else {
        $(this).addClass('O').html("O");
          oMoves.push($(this).attr('data-num'));
          console.log("--- o", oMoves);
          checkForWin(oMoves);
      }
    })
  }

  // function to check who wins
  function checkForWin(movesArray) {

  }


  listeners();
















})
