// 1. Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона на 
// зеленый и уменьшать его до размеров 100х100px.

// 2. Создать кнопку и розовый квадрат с размерами 200х200px. 
// При клике на кнопку менять цвет на синий и выводить в консоль
// обновленный цвет квадрата.

// 3. Создать кнопку и квадрат с размерами 150х150px. 
// При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

// 4. Создать кнопку и div с классом root. При клике на кнопку в div 
// создается параграф синего цвета. Текст параграфа произвольный.

// 5. Создать кнопку и div с классом root. При клике на кнопку в div 
// создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.

// У меня пять заданий. Я создам пять карточек, каждая карточка
// для своего задания.

document.body.innerHTML += `
<section class="container-task">        
<h4>Задание 1</h4> 
<div class="task number-1">                       
    <button class="change-square btn1">Change Square</button>
    <div class="square sqr1"></div>
</div>        
<h4>Задание 2</h4> 
<div class="task number-2">                      
    <button class="change-square btn2">Change Square</button>
    <div class="square sqr2"></div>
</div>
<h4>Задание 3</h4>
<div class="task number-3">            
    <button class="change-square btn3">Change Square</button>
    <div class="square sqr3"></div>
</div>
<h4>Задание 4</h4>
<div class="task number-4">           
    <button class="change-square btn4">Change Square</button>
    <div class="root rt1"></div>
</div>
<h4>Задание 5</h4>
<div class="task number-5">          
    <button class="change-square btn5">Change Square</button>
    <div class="root rt2"></div>
</div>
</section>
`
const btn1 = document.querySelector('.btn1')
const squareElement1 = document.querySelector('.sqr1')
btn1.addEventListener('click', function() {
    squareElement1.classList.toggle('sqr1-resized')
})


const btn2 = document.querySelector('.btn2')
const squareElement2 = document.querySelector('.sqr2')
btn2.addEventListener('click', function() {
    squareElement2.classList.toggle('sqr2-resized')
    const lastColor = getComputedStyle(squareElement2).getPropertyValue('background-color') 
    const lastColorConverted = chroma(lastColor)
    console.log(lastColorConverted.name())
    btn2.textContent = `${lastColorConverted.name()}`
    
})

const btn3 = document.querySelector('.btn3')
const squareElement3 = document.querySelector('.sqr3')
let widthSqr3 = 20
let heightSqr3 = 20
let isGrowing = true

btn3.addEventListener('click', function() {  
    if (isGrowing) {
        if (widthSqr3 < 210 && heightSqr3 < 210) {
            widthSqr3 += 20
            heightSqr3 += 20
            btn3.textContent = '+ 20px'
            squareElement3.style.backgroundColor = 'deepskyblue' 
            if (widthSqr3 >= 210) {
                isGrowing = false
                btn3.textContent = '- 20px'
                squareElement3.style.backgroundColor = 'deeppink' 
            }
        }
    } else {
        if (widthSqr3 > 50 && heightSqr3 > 50) {
            widthSqr3 -= 20
            heightSqr3 -= 20
            
            if (widthSqr3 <= 50) {
                isGrowing = true
                btn3.textContent = '+ 20px'
                squareElement3.style.backgroundColor = 'deepskyblue' 
            }
        }
    }
    squareElement3.style.width = `${widthSqr3}px`
    squareElement3.style.height = `${heightSqr3}px`
})

const btn4 = document.querySelector('.btn4')
const squareElement4 = document.querySelector('.root')
let isParagraphCreated = false
btn4.addEventListener('click', function(){
    if (!isParagraphCreated) {
        const paragraph = document.createElement('p')
        paragraph.textContent = "Вывод параграфа в контейнере DIV с помощью кнопки Change Square"
        paragraph.style.color = "deepskyblue"
        paragraph.style.fontSize = "26px"
        paragraph.style.textAlign =  "center"
        squareElement4.appendChild(paragraph)
        isParagraphCreated = true
    }  
})

const btn5 = document.querySelector('.btn5')
const squareElement5 = document.querySelector('.rt2')
const colors = ['blue', 'green']
let currentColorIndex = 0
squareElement5.style.backgroundColor = "#dfdfdf"
btn5.addEventListener('click', function() {
    const paragraph1 = document.createElement('p')
    if (currentColorIndex == 0) {
        paragraph1.textContent = "Текст параграфа номер 1 синего цвета"
    } else {
        paragraph1.textContent = "Текст параграфа номер 2 зеленого цвета"
    }
    paragraph1.style.fontSize = "28px"
    paragraph1.style.textAlign =  "center"
    paragraph1.style.color = colors[currentColorIndex]
    paragraph1.style.textDecoration = "underline"
    paragraph1.style.fontFamily = `Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`
    squareElement5.innerHTML = ''
    squareElement5.appendChild(paragraph1)
    currentColorIndex = (currentColorIndex+1) % colors.length
})


