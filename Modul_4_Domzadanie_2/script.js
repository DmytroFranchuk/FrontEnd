//  1. Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке
//  от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы 
//  в div с классом numbers.
//  2. Написать цикл, который проходится по массиву строк, для каждой строки создает
//  параграф и добавляет его в div с классом strings_container. 
//  Строки взять произвольные.
//  3. Написать цикл, который проходится по массиву с объектами - у объектов свойства
//  first_name, last_name и  age (данные взять произвольные) - и создает карточки 
//  только для совершеннолетних пользователей. Карточка должна содержать информацию 
//  об имени, фамилии и возрасте пользователя. Добавить все карточки в 
//  div с классом users_container.

// document.querySelector('.numbers').innerHTML = Array.from({length: 6}, (_,i) => `<p>${100 - i * 10}</p>`).join('')

const numbersDiv = document.querySelector('.numbers')
for (let i = 100; i>= 50; i -= 10) {
  numbersDiv.innerHTML += `<p>${i}</p>`
}

const modelsAuto = ["BMW", "Audi Sport", "Ferrari", "General Motors", "Haval", "Tesla", "Volkswagen", "Porsche"]
const container = document.querySelector('.strings_container')
for ( let i = 0; i<modelsAuto.length; i++) {
  container.innerHTML += `<p>${modelsAuto[i]}</p>`
}

const users = [
  { first_name: "Даша", last_name: "Пупкина", age: 22 },
  { first_name: "Маша", last_name: "Распутина", age: 18 },
  { first_name: "Алиса", last_name: "Стопкина", age: 16 },
  { first_name: "Наташа", last_name: "Коровина", age: 25 }
]
const containerGirl = document.querySelector(".users_container")
for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    containerGirl.innerHTML += `
    <div class="user-card">
      <h2>${users[i].first_name} ${users[i].last_name}</h2>
      <p>${users[i].age}</p>
    </div>    
    `
  }
}
