"use strict";
//Сад - это объект со списком объектов деревьев.
//У всего сада есть возраст (например количество суток).
//Сад имеет метод:
//просчитать 1 сутки (т.е. метод, который фиксирует прохождение суток)



class Garden {
    constructor () {
        this.countApples = 0; // количество яблок на конкретном дереве
        this.countAllGrowApple = 0; // суммируем количество рождённых яблок в саду со всех деревьев
        this.trees = []; //массив деревьев
        this.quantity = Math.floor(Math.random()*(100-1)+1); // добавляем случайное количество деревьев от 1 до 100
        for (let i = 0; i < this.quantity; i ++) {
            this.trees.push(new Tree());  // пушим N деревев в класс Tree
        }
        this.age = 1; // возраст сада
        this.day = 1; // день сегодняшний
    }

// получить список висящих яблок на деревьях
    getCountApples(){
        for (let i=0; i<this.trees.length; i++) { // проходит по массиву деревьев
            this.countApples +=this._trees[i].apples.length; //у каждого дерева (class Tree) есть масссив яблок(apples),он проходится по каждому и считает количество и суммирует в countApples
        }
        return console.log(this.countApples); //возвращает в консольку
    }

//задаем метод, который фиксирует прохождение суток
    passDay() {
        for (let i=0; i < this.trees.length; i++) {
            this.trees[i].oneDayPassed(); //обращаемся к свойству дерева "один прошедший день"
            this.countApples += this.trees[i].apples.length;// фиксируем изменения количество яблок после суток
            this.countAllGrowApple+=this.trees[i].countGrowApple;//считает количество рожденных яблок
        }

        if (this.age !==31){
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+")");}
            else{
            console.log("день - "+this.day+" (Всего яблок на "+this.quantity+" деревьях - " +this.countApples+" , "+ "выросло - "+this.countAllGrowApple+" яблок)");
            this.age =1;// сбрасываем что бы начать отсчет опять
             }
        this.age += 1; // увеличиваем возраст сада
        this.countApples = 0; // все выведины, сбрасываем счетчики что бы не суммировать все значений каждый день
        this.countAllGrowApple = 0;
        return this.day += 1; // увеличиваем день в саду
        // РАДУЕШЬСЯ КАК ДУРАК
    }


}
