// первое задание.
console.log('первое задание');

let height = 15;
let length = 25;
let width = 20;
// S = 2(ab + bc + ac)

let sp;

sp = 2*(height*length + length*width + height*width);
console.log(sp); //2350
console.log(Math.max(height, width)); //20

var res = (height > width) ? console.log(height): console.log(width);


// второе задание
console.log('второе задание');

let garden = 1000;
let g1 = 15;
let g2 = 25;

let sg;

let g12 = 15  * 25;

sg = garden % g12;
console.log (sg); //250

// третье задание
console.log('третье задание');

let bsd = 15;
let lsm = 600;

let bsm = 15 *100;

//S=π  (R2−r2)

console.log (Math.PI*(bsm-bsd));

// четвертое задание
console.log('четвертое задание');

let x = 20;
let y = 10;

if (x>y) {
  x = y + x;
  y = x - y;
  x = x - y;
  console.log (x , y);
}else {
  console.log (x , y);
}

// пятое задание
console.log('пятое задание');
let m = 9;
let n = 9.5;
let z = 10;
let zm = 10 - m;
let zn = 10 - n;
res = (zn === zm) ? console.log("значения равны") : (zn > zm) ? console.log(m):console.log(n) ;
