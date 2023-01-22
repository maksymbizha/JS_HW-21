'use strict';


// створити div
// додати йому клас main

// пофарбувати його жовтим

// додати його у body

// запитати у користувача колір фону, запропонувавши вибрати з 3 варіантів (варіанти придумуємо самі)

// пофарбувати дів у вибраний колір. якщо колір не вибрано, то прибрати фон

// запитати у користувача, чи додавати тінь

// якщо користувач погодився, додати тінь для div

// запитати у користувача текстове наповнення
// додати введений текст всередину div

const newDiv= document.createElement(`div`)
newDiv.textContent= 'Div'

newDiv.classList.add('main','textCent')
newDiv.classList.add('bgYellow')
document.body.append(newDiv)


const userBgColor = prompt('Пропоную пофарбувати div в один з трьох кольорів: RED, BLUE, GREEN, обери одни колір ?');

if(userBgColor || userBgColor !== null){
    switch (userBgColor.toUpperCase()){
        case 'RED':
            newDiv.classList.remove('bgYellow');
            newDiv.classList.add('bgRed');
            break;
        case 'BLUE':
            newDiv.classList.remove('bgYellow');
            newDiv.classList.add('bgBlue')
            break;
        case 'GREEN':
            newDiv.classList.remove('bgYellow');
            newDiv.classList.add('bgGreen')
            break;
        default:
            newDiv.classList.remove('bgYellow')
    }
}else {
    newDiv.classList.remove('bgYellow')
}

const userShadow= confirm('Додати тінь до div?')
if (userShadow){
    newDiv.classList.add('shadow')
}

newDiv.textContent= prompt('Що напишемо в div?')

