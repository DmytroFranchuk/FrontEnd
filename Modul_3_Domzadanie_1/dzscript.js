//---------------------------------------------------------------------------------------------------
// Задача_1                                                                                         |
//---------------------------------------------------------------------------------------------------
// Написать программу, которая через prompt считывает число и                                       |
// выводит в консоль число равное 10% от введенного числа                                           |
//---------------------------------------------------------------------------------------------------
// Задача_2                                                                                         |
//---------------------------------------------------------------------------------------------------
// Написать программу, которая получает два числа и выводит наименьшее                              |
//---------------------------------------------------------------------------------------------------
// Задача_3                                                                                         |
//---------------------------------------------------------------------------------------------------
// Написать программу, которая считывает через prompt число и выводит                               |
// одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’        |
//---------------------------------------------------------------------------------------------------
// Задача_4                                                                                         |
//---------------------------------------------------------------------------------------------------
// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в   | 
// консоль сообщение ‘Hello, <name>’, если пользователь совершеннолетний, или ‘Hi, <name>’, если    |
// пользователь несовершеннолетний.                                                                 |
//---------------------------------------------------------------------------------------------------

// Задача_1
//---------------------------------------------------------------------------------------------------
console.log("Задача_1")
const number1 = prompt("Введите число")
let prosent10 = 0
prosent10 = number1 * 0.1
console.log("10% от " + number1 + " = " + prosent10)
//---------------------------------------------------------------------------------------------------

// Задача_2
//---------------------------------------------------------------------------------------------------
console.log("Задача_2")
const number2 = prompt("Введите первое число")
const number3 = prompt("Введите второе число")
if((number2 - number3) < 0) {
    console.log("Наименьшее число = " + number2)   
} else if((number2 - number3) == 0) {
    console.log(number2 + " = " + number3)   
} else {
    console.log("Наименьшее число = " + number3)   
}
//---------------------------------------------------------------------------------------------------

// Задача_3
//---------------------------------------------------------------------------------------------------
console.log("Задача_3")
if(number1 >= 100) {
    if(number1 == 100) {
        console.log("Число равно 100")
    } else {
        console.log("Число больше 100")
    }
} else {
    console.log("Число меньше 100")
}
//---------------------------------------------------------------------------------------------------

// Задача_4
//---------------------------------------------------------------------------------------------------
console.log("Задача_4")
const strName = prompt("Введите ваше имя")
const number4 = prompt("Введите ваш возраст (в годах)")
if(number4 >= 18) {
    console.log("Hello, " + strName)
} else {
    console.log("Hi, " + strName)
}
//---------------------------------------------------------------------------------------------------


