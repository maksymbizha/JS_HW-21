'use strict';

const newDiv= document.createElement(`div`)
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



const userText = prompt('Що напишемо в div?')
if(userText){
    newDiv.textContent = userText
}else {
    newDiv.textContent = 'Div'
}

