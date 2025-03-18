// console.log("script cargado")

const calcDisplay = document.querySelector(".display")
const buttons = document.querySelectorAll("button")

const specialChars = ["%","*","/","-","+","="]

let output ="";

// funcion para calcular

const calcular = (btnValue) => {
    calcDisplay.focus()

    if(btnValue === "=" & output !== ""){
        // EVAL funcion matemática que evalua la string ingresada en la calculadora
        output = eval(output.replace("%","/100"))

    }else if(btnValue==="AC"){
        output=""

    }else if (btnValue === "DEL"){
        output = output.toString().slice(0, -1)
    }else{
        if (output === "" && specialChars.includes(btnValue))
            return
        output += btnValue
    }
    calcDisplay.value = output
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => calcular(e.target.dataset.value))
})