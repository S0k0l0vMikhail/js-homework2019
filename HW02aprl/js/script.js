(function () {
  "use strict";

console.log("1 task");
  var arr1 = [1,2,3,8], i;
  //for (i = 0; i < 10; i++ ) {
  //arr1.push( Math.round( Math.random() * 10 ));}

  var arr2 = [1,2,3,4];
  //for (i = 0; i < 10; i++ ) {
  //arr2.push( Math.round( Math.random() * 10 ));}
  //arr2 = arr1.slice();

  console.log (arr1, arr2);

  function compare(arrname1, arrname2) {
    if (!Array.isArray(arrname1 && arrname2)){
      console.log("не массив");
      return;
    } else if (!(arrname1.length === arrname2.length)) {
      console.log("не равны т.к. длина разная");
      return;
    } else {
      for (var i = 0; i<arr1.length; i++){
        if (!(arr1[i]===arr2[i])){console.log("не равны");return;}
      }
      console.log("РАВНЫ!");
      return;
    }
  }
  compare(arr1 , arr2);

console.log("2 task");

  function recursion(num) {

  }
  //recursion(234);

console.log("3 task");

  function range(num1, num2, num3) {
      if (!(num1 && num2)) {
          console.log("нет обязательных параметров");
      }
      var arr = [];
      num3 = num3 || 1;
      for (var i = num1; i <= num2; i=i+num3) {
        arr.push(i);
      }
      console.log(arr);
      return;
  }

  range(1,10,2);


console.log("4 task");

  function functionName(count) {
    if(typeof(count)=="number")
    var num = String(count);
    var arr = num.split('');
    var n = arr[arr.length - 1];
    if (n == 1) {
      console.log(count + " товар");
    } else if (n >= 2 && n <= 4) {
      console.log(count + " товара");
    } else {
      console.log(count + " товаров");
    }
    //console.log(n);
    return;
  }

  functionName(14);
}())
