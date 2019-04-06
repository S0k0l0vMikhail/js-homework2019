(function () {
  "use strict";

console.log("1 task");

let goods = {
      piano: {
          title: "Пианино",
          price: 3000,
          count: 25
      },
      guitar: {
          title: "Гитара",
          price: 1200,
          count: 40
      },
      drum: {
          title: "Барабаны",
          price: 2700,
          count: 12
      },
      flute: {
          title: "Флейта",
          price: 900,
          count: 50
      },
      harp: {
          title: "Арфа",
          price: 3400,
          count: 5
      }
  };

  function getGoods( obj, from, to) {
      for (let key in obj) {

         if (obj[key].price >= from && obj[key].price <= to) {

           console.log(obj[key]);
         }
         return;
      }
  }

getGoods(goods, 2000, 3000);

console.log("3 task");

let books = [
      { author: 'Толстой', title: 'Война и мир'},
      { author: 'Гончаров', title: 'Обломов'},
      { author: 'Лермонтов', title: 'Герой Нашего Времени'}
  ];


    function sortBook(arr) {
      var resArr = [];
        for (let i = 0; i < arr.length; i++){
            }
        return j;
    }

 console.log(sortBook(books));

}())
