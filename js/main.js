
$(function(){
  var o = 'O';
  var x = 'X';
  var numX = 0;
  var numO = 0;
  var firstRow  = $('.first-row h1');
  var secondRow = $('.second-row h1');
  var thirdRow = $('.third-row h1');
  // var start = ox[Math.floor((Math.random()))];

  $('.board').on('click', '.user-input', function() {

    if ( $(this).text() !== x && $(this).text() !== o ) {
      if ( numX > numO ) {
        $(this).text(o);
        numO ++;
        winner();

      } else {
        $(this).text(x);
        numX ++;
        winner();
      }
    }

  });

  function winner() {

    for (var a = 0;a < 3;a++) {
      for (var b =0;b < 3;b++) {
        for (var c = 0;c < 3;c++) {

          if ( $(firstRow[a]).text() === $(firstRow[a+1]).text() && $(firstRow[a+1]).text() === $(firstRow[a+2]).text() ) {
            $('.winner').text('Winner is: '+ $(firstRow[a]).text());
          } else if ( $(firstRow[a]).text() === $(secondRow[a]).text() && $(secondRow[a]).text() === $(thirdRow[a]).text() ){
            $('.winner').text('Winner is: '+ $(firstRow[a]).text());
          }


        }
      }
    }
  }

});

//1st f[0] f[1] f[2]
//2nd s[0] s[1] s[2]
//3rd t[0] t[1] t[2]
