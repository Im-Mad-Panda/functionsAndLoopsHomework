"use strict";

// 1. Написать функцию, которая принимает высоту прямоугольника и его ширину и возвращает площадь прямоугольника.

function rectangle(a, b){
  let area = (a * b);
  return area;
}
// const res = (rectangle(5, 10));
// console.log(res);

// 2. Написать функцию, которая принимает диаметр и возвращает длину окружности.

const P = 3.14;

function diameter(a){
  let circle = (P * a);
  return circle;
}
// console.log(diameter(15));

// 3. Написать функцию, которая принимает высоту и диаметру основания циллиндра и возвращает его объем.

function cylinderBase(height, diameter){
  let volume = (height * P * diameter * diameter / 4);
  return volume;
}
// console.log(cylinderBase(5, 1))

// 4. Реализовать конвертер доллара (доллар-грн и грн-доллар, в зависимости от переданного модификатора). Курс текущий на момент решения задачи.

const usd = 36.75;

function converter(mode, num) {
  if (mode === 'UAH') 
      return num / usd;
  else (mode === 'USD')  
      return num * usd;
  }

// console.log(converter('UAH',100));
// console.log(converter('USD',100));

// 5. Выведите все числа в заданном диапазоне, которые делятся на 5. (Функция принимает два числа (от и до) 
// и выводит в консоль всё из этого диапазона, что делится на 5).

function getNums(from, before){
  for(let i = from; i <= before; i++){
    if(i % 5 === 0){
      console.log(i);
    }
  }
}
getNums(1, 47);

// 6. Реализовать игру FizzBuzz (Fizz buzz это групповая детская игра для обучения правилам деления. Начинающий произносит число «1», 
// и каждый следующий игрок прибавляет к предыдущему значению единицу. Когда число делится на три оно заменяется на fizz, 
// если число делится на пять, то произносится buzz. Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. 
// Сделавший ошибку игрок исключается из игры.

//     Типичная партия в fizz buzz выглядит так:
//     1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...)

function FizzBuzz(startNum, finishNum){
  for (let i = startNum; i <= finishNum; i++){
    if (i % 3 === 0 && i % 5 === 0)
    console.log("Fizz Buzz");
  else if (i % 3 === 0)
  console.log("Fizz");
  else if (i % 5 === 0)
      console.log("Buzz");
  // else if(i % 15 === 0);
  //     console.log("");
  else
      console.log(i);
}
}
FizzBuzz(1, 45);

