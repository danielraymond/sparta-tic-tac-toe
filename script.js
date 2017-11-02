$(function(){
  // allow table elements to change color when clicked


  // $('td').on('click',function(){
  //   $('td').addClass('X').html("X");
  // })


  $('td').each(function (index) {

        $('td').click(function(){
          $(this).addClass('X').html("X");
        })

      })















})
