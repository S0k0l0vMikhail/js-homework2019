"use strict";
//Дерево - это объект со списком объектов яблок.
//Каждые 30 суток на каждом дереве рождается новое яблоко.
//Все яблоки каждые сутки стареют на 1 день.
//Яблоки падают с дерева при возрасте 30 дней.
//Яблоки портятся, после падения через сутки

class Tree {
    constructor() {
        this.apples = []; //задаем массив с яблоками на дереве
        this.countGrowApple = 0; //суммируем количество рождённых яблок
        this.age = 1; // возраст дерева
        this.quantity = Math.floor(Math.random() * (100 - 1) + 1); //количество будущих яблок в массиве
        for (let i = 0; i < this.quantity; i++) {
                    this.apples.push(new Apple()); //добовляем новое яблоко
                    //this.apples[i] = new Apple();// добовляем новое яблоко
        }
      }

//запускаем день
    oneDayPassed() {
        for (let i = 0; i < this.apples.length; i++) { // перебор всех яблок на дереве
            this.apples[i].hasAged(); //увеличиле возраст яблока
            if (this.apples[i].fall === 1) { // проверили упало ли яблоко, если да поставил что оно испортилось.
                this.apples[i].spoil();
            }
            if (this.apples[i].age > 30) { // если возраст яблока больше 30, то оно падает
                this.apples[i].fell();
            }
            if (this.apples[i].spoiled === 1) {// если яблоко испортилось убираем его с дерева
                this.apples.splice(i, 1); //изменяет содержимое массива, удаляя один элемент по индексу i и/или добавляя новые.
            }
        }
        this.newApple();// начинаем процесс рождания яблока
        this.age += 1; //увеличили возраст дерева
    }

    newApple() {
        if (this.age === 31) {// проверяем если дереву 31, то он сносит яблочко
            this.countGrowApple=0;
            this.quantity = Math.floor(Math.random() * (30 - 1) + 1);//рандомное число яблок которые сегодня родятся
            for (let i = 0; i < this.quantity; i++) {
                this.apples.push(new Apple());
               }
            this.countGrowApple=this.quantity; //устанавливаем скок яблок на дереве
            this.age = 1;// сбрасываем возраст дерева чтобы начать отсчет для рождения яблок заново
        }
    }
}
