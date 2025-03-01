const inputElement = document.getElementById('password');
const btnElement = document.getElementById('btn')
var copyElement = document.getElementById('copy')

const generatePassword = () =>{
    console.log('funcion cargada')
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]"

    let password = '';

    for(let i=0; i<9; i++){
        password += charset.charAt(Math.floor(Math.random()*charset.length));
    }
    console.log(password);
    inputElement.value=password;
}


function copyPassword (){

    if(!inputElement.value){
        alert('No hay contraseña a copiar')
        return ;
    }
    navigator.clipboard.writeText(inputElement.value.trim())
    .then(()=> {
        alert('Contraseña copiada al portapapeles');
    })
    .catch((err) => {
        console.error('No se pudo copiar al portapapeles', err);
    });
}
// accion del boton
btnElement.addEventListener('click', generatePassword)

//copiar contraseña

copyElement.addEventListener('click', copyPassword)



console.log('script cargado')