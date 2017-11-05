$(function(){

  // global variables to save entered values
  var winCounter = 0;
  var counter = 1;
  var OMoves = [];
  var XMoves = [];
  // win condition array
  var $winningCombinations = $([[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]);

  resetListener();
  listeners();
  // function to set up listeners
  function listeners() {
    $('td').click(function(event){
      // counter to change turn
      counter ++;
      if ($(this).html().length === 0) {
        if (counter % 2 === 0) {
          $(this).attr("class", "X").html("X");
            XMoves.push(parseInt($(this).attr('data-num')));
            console.log("--- x", XMoves);
            checkForWin(XMoves, "Crosses");
            $('.playerTurn').html("It is O's turn");
        } else {
          $(this).attr("class", "O").html("O");
            OMoves.push(parseInt($(this).attr('data-num')));
            console.log("--- o", OMoves);
            checkForWin(OMoves, "Noughts");
            $('.playerTurn').html("It is X's turn");
        }
      }
    })
  }

  // function to check who wins
  function checkForWin(movesArray, name) {
    $winningCombinations.each(function(index, combination){
      winCounter = 0;
      $(combination).each(function(index, winningBox){
        if(movesArray.indexOf(winningBox) !== -1){
          // Add one
          winCounter++;
        }
        // If counter gets to we have a winning combination
        if (winCounter === 3){
          alert("Game over, " + name + " wins!");
          resetBoard();
        }
      })
    })
  }

  // reset listener
  function resetListener() {
    $('#reset').click(resetBoard);
  }

  // reset function
  function resetBoard() {
    $('td').attr("class", "clear").html("");
    winCounter = 0;
    counter = 1;
    OMoves = [];
    XMoves = [];
    $('.playerTurn').html("It is X's turn");
  }
})
