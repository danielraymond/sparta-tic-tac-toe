$(function(){
  // allow table elements to change color when clicked


  // $('td').on('click',function(){
  //   $('td').addClass('X').html("X");
  // })
  var check = true;
  // var noughtCheck = false;


  function game() {
    for (var i = 0; i < 10; i ++) {
      turnCheck();
    }
  }

  game();

  function turnCheck() {
    if (check === true) {
      changeCross();
      check = false;
    } else if (check === false) {
      changeNought();
      check = true;
    }
  }

  // turnCheck();

  function changeCross() {
    // event to change td to cross
    $('td').each(function (index) {
      $('td').click(function(event){
        $(this).addClass('X').html("X");
      })
    })
  }

  function changeNought() {
    // event to change td to nought
    $('td').each(function (index) {
      $('td').click(function(event){
        $(this).addClass('O').html("O");
      })
    })
  }















})
