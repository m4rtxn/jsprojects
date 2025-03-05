let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")

btns.forEach(btn=> {
    btn.addEventListener("click",e=>{
        // obtener el id del boton que se da click
        let elementId= e.currentTarget.id;
        console.log(elementId)

        if(elementId == 'delete-btn'){
            count--;
        }else if (elementId == 'reset-btn'){
            count = 0;
        }else{
            count++;
        }

        value.textContent =count;
        // operador ternario
        value.style.color = count>0 ? "green" : count <0 ? "red" : "black";
        
    });
});