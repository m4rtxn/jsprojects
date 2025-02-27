const btnElement = document.querySelector('button')

const spanElement = document.getElementById('content')


btnElement.onclick = () =>{

    // leer un valor ingresado
    const newName = prompt("Por favor ingresa tu nombre");
    // actualizar variable
    spanElement.textContent = newName;
}