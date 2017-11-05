$(function(){



  var counter = 0;
  var oMoves = [];
  var xMoves = [];

  function listeners() {

      $('td').click(function(event){

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
            }
            // if ($(this).hasClass( "X" ) === true) {
            //   var z = 2;
            //   console.log("class " + z);
            // } else if ($(this).hasClass( "X" ) === false) {
            //   var y = 1;
            //   console.log("class " + y);
            // }


    })
  }



  listeners();
















})
