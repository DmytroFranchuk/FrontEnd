// Задача_1 способ_1
let x = 1
for(let i = 0; i <= 10; i++) {
    if(x == 2){
        console.log(i) 
        x = 1       
    } else {
        x++
    }
}

// Задача_1 способ_2
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 1){
        console.log(i)      
    }
}

// Задача_2
for(let i = 55; i >= 20; i--) {
    console.log(i)
}

// Задача_3
// Задача_4
// Задача_5
const numbers = [3, 5, 11, 2, 8, 1, 6];
const numbers_squared = [];
for(let i = 0; i < numbers.length; i++) {
    numbers_squared[i] = numbers[i]**2
    console.log(numbers[i] + ' - ' + numbers_squared[i])    
}
let last_elem = numbers_squared[numbers_squared.length-1]
console.log(last_elem)

// Задача_6
const user = {
    first_name: 'Ivan', 
    last_name: 'Ivanov', 
    age: 20, 
    salary: 500
    }
// console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)
const str = `User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`
console.log(str)
    








