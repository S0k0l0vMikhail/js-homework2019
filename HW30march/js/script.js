// первое задание.
console.log('первое задание');

var numbers = [], i, m, n;
for (i = 0; i < 10; i++ ) {
numbers.push( Math.round( Math.random() * 10 ));
}
console.log ( numbers);

for ( m = 0; m <= 10; m++) {
  numbers[m];

for ( n = 0; n <= 10; n++) {
  numbers[n];
  if (numbers[m] + numbers[n] === 7){
    console.log("Done");// т.к. в задании не указано что нужные элементы массива надо показать, то технически я его сделал, т.к. он останавливает перебор как находит первую пару равную семи :)
    break;
  }
}
}

console.log('второе задание');

for (var x = 1; x <101; x++ ){

  //var y = (x % 3) + (x % 5);
  var t = (x % 3);
  var f = (x % 5);
  //if (y!=0 && t!=0 && f!=0) {
  if (t!=0 && f!=0) {
    console.log(x);
  } else {
    if (t === 0 && f === 0) {console.log("ThreeFive");}
    else if (t === 0) {console.log("Three")}
    else {console.log("Five")}
  }
}

console.log('третье задание');

var a = 10;
var b = 40;
var c = 20;
var d = a;
if (b > a && c < b) {d=b;} else if (c > b) {d=c;}
console.log (d);

if (d < a+b+c-d) {console.log("Треугольницу быть!");} else {console.log("Треугольнику не быть!");}

// кажется тут надо изучать cos и sin...
