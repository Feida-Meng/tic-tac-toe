
$(function(){
  var o = 'O';
  var x = 'X';
  var numX = 0;
  var numO = 0;
  var moves  = $('.box h1');
  for (var i=0;i<9;i++) {
    $(moves[i]).text("");
  }


  $('.board').on('click', '.user-input', function() {

    if ( $(this).text() === "" ) {
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

    var row = 0;
    var col = 0;
    for (row = 0; row < 3; row ++) {
      for (col = 0; col < 3; col ++) {
        // if (col === 0) {

        //   console.log('m+1: ' + (col+3*row+1) + ' is'+ $(moves[col+3*row+1]).text() +($(moves[col+3*row]).text() === $(moves[col+3*row+1]).text()));
        //   console.log('m+2: ' + (col+3*row+2) + ' is'+ $(moves[col+3*row+2]).text() +($(moves[col+3*row]+1).text() === $(moves[col+3*row+2]).text()));
        // }
        var condition1 = ( $(moves[(col+3*row)]).text() !=="" && ( $(moves[(col+3*row)]).text() === $(moves[(col+3*row+1)]).text() ) && ( $(moves[(col+3*row+1)]).text() === $(moves[col+3*row+2]).text() ) );
        // console.log('col: '+ col + ' row: ' + row + ' move : ' + $(moves[col+3*row]).text());
        // console.log('condition: ' + condition1);
        // console.log('condition1 : ' + (col === 0));
        // if (col === 0) {
        // console.log('m+1: '+(col+3*row+1) + ' condition2 : ' + ( $(moves[(col+3*row)]).text() === $(moves[(col+3*row+1)]).text() ));
        // console.log('m+2: '+(col+3*row+2) + ' condition3 : ' + ( $(moves[(col+3*row+1)]).text() === $(moves[col+3*row+2]).text() ));
        // }

        if (condition1) {
          $('.winner').text('Winner is: '+ $(moves[(col+3*row)]).text() );
          console.log('Winner is: '+ $(moves[(col+3*row)]).text());
          break;
        }
      }
    }
  }


});

//1st f[0] f[1] f[2]
//2nd s[0] s[1] s[2]
//3rd t[0] t[1] t[2]
