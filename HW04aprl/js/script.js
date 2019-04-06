(function () {
  "use strict";

console.log("1 task");

  //var oldstr = prompt("Введите текст");
  //var search = prompt("Введите текст который надо найти и заменить");
  //var newstr = prompt("Введите текст на котрый надо заменить");
  var oldstr = "qwe old zxc old";
  var search = "old";
  var newstr = "new";
  var final = oldstr.replace( search, newstr);

  console.log(final);


  console.log("2 task");

    var str = "sdf 34 sdffh 43 dfbsdkh 56";

    for (var i = 0; i < str.length - 1 ; i++) {
      var tip = typeof +str[4];
      if ( tip === "number" && tip !=0 && tip != NaN ) {
        var newstr1 = newstr1 + str[i];
        console.log(1);
      }
    }
    console.log(newstr1);
}())
