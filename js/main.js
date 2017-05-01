
$(function(){
  var o = 'O';
  var x = 'X';
  var numX = 0;
  var numO = 0;
  var moves  = $('.box h1');
  var won = false;

  for (var i=0;i<9;i++) {
    $(moves[i]).text("");
  }

  $('.board').on('click', '.user-input', function() {

    if ( won === false && $(this).text() === "" ) {
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

    for (var row = 0; row < 3; row ++) {
      for (var col = 0; col < 3; col ++) {

        var m  = $(moves[col+3*row]).text();
        var horizontalCondition   = ( col === 0 && m !=="" && ( m === $(moves[col+1+3*row]).text() ) && ( $(moves[col+1+3*row]).text() === $(moves[col+2+3*row]).text() ) );
        var verticalCondition     = ( row === 0 && m !=="" && ( m === $(moves[col+3*(row+1)]).text() ) && ( $(moves[col+3*(row+1)]).text() === $(moves[col+3*(row+2)]).text() ) );
        var leftDiagnalCondition  = ( col===0 && row === 0 && m !=="" && ( m === $(moves[col+1+3*(row+1)]).text() ) && ( $(moves[col+1+3*(row+1)]).text() === $(moves[col+2+3*(row+2)]).text() ) );
        var rightDiagnalCondition = ( col===2 && row === 0 && m !=="" && ( m === $(moves[col-1+3*(row+1)]).text() ) && ( $(moves[col-1+3*(row+1)]).text() === $(moves[col-2+3*(row+2)]).text() ) );

        if (horizontalCondition || verticalCondition || leftDiagnalCondition || rightDiagnalCondition) {
          $('.winner').text('Winner is: '+ $(moves[(col+3*row)]).text() );
          won = true;

          break;
        }
      }
    }

    if (numX === 5 && won === false) {
      $('.winner').text("It's a draw" );

    }
  }

});
