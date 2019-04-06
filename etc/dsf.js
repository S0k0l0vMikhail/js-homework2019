function getSum(num) {
    let result = 0;
   if (num === 0){
       return result;
   } else {
       result = num % 10 + getSum(Math.floor( num / 10));
        return result;
   }

}

let number = 565;
let result = getSum(number);
console.log('сумма цифр числа', +number,'=', result );
