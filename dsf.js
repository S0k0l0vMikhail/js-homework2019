for (var x = 1; x <101; x++ ){

  var y = (x % 3) + (x % 5);
  var t = (x % 3);
  var f = (x % 5);
  if (y!=0 && t!=0 && f!=0) {
    console.log(x);
  }
  else {
    if (t === 0 && f === 0){
      console.log("ThreeFive");
    } else if (t === 0) {
        switch (t) {case 0:console.log("Three");}
    } else ( f === 0 ) {
        switch (f) {
        case 0:
          console.log("Five");
        }
    }
    }
  }
