

const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

eyeicon.onclick = function(){
    // originalmente el input está en password, por lo que se mostrará censurado, debe cambiarse a text para ser visualizado
    if (password.type === "password"){
        password.type = "text";
        // cambiamos el icono
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye")

    } else{
        // si el input ya está en "text" hay que cambiarlo nuevamente a password
        password.type = "password"
        eyeicon.classList.remove("fa-eye")
        eyeicon.classList.add("fa-eye-slash")
    }
}