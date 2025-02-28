// seleccionar elementos

const generate = document.getElementById('btn-generate');
const numberElement= document.getElementById('random-number');

// funcion del boton
generate.addEventListener('click', ()=> {

    const randomNumber = Math.floor(Math.random()*100) +1;

    numberElement.textContent = randomNumber;
})