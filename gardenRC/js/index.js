"use strict";
let garden = new Garden(); // записываем в переменную новый объект Garden 

setInterval(function() { //каждые 5 секунд = 1 пройденный день
    garden.passDay();
}, 5000);


