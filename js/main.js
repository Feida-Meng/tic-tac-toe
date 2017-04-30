
$(function(){
  var o = 'O';
  var x = 'X';
  var moves =[];
  var numX = 0;
  var numO = 0;
  // var start = ox[Math.floor((Math.random()))];

  $('.board').on('click', '.user-input', function() {

    if ( $(this).text() !== x && $(this).text() !== o ) {
      if ( numX > numO ) {
        $(this).text(o);
        // moves.push(o);
        numO ++;

      } else {
        $(this).text(x);
        numX ++;
        // moves.push(x);
      }
    }

  });

  // function winer() {
  //
  //   // moves[];
  // }

});

//1st f[0] f[1] f[2]
//2nd s[0] s[1] s[2]
//3rd t[0] t[1] t[2]
