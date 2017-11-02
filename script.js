$(function(){



  var counter = 0;

  function listeners() {
    $('td').each(function (index) {
      $('td').click(function(event){
          for (var i = 1; i < 10; i ++) {
            counter ++;
            if (counter % 2 === 0) {
              $(this).addClass('X').html("X");
            } else {
              $(this).addClass('O').html("O");
            }
            if ($(this).hasClass( "X" ) === true) {
              var z = 2;
              console.log("class " + z);
            } else if ($(this).hasClass( "X" ) === false) {
              var y = 1;
              console.log("class " + y);
            }
          }
      })
    })
  }


  listeners();
















})
