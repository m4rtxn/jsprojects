document.addEventListener("DOMContentLoaded",function(){

    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const message = document.getElementById('message');

    checkButton.addEventListener("click",function(){
        const number = parseInt(numberInput.value);
        console.log(number)

        if(isNaN(number)){
            message.textContent ="Por favor ingresa un número valido"
            message.style.color = "red";
            return false;
        }

        if(isPrime(number)){
            message.textContent = `${number} es primo`
            message.textContent = number + " es primo"
            message.style.color = "green"
        }else{
            message.textContent = `${number} no es primo`
            message.style.color = "red"
        }
    });

    function isPrime(number){
        if(number <= 1) return false;
        if(number <=3) return true;

        if(number %2 === 0 || number % 3===0) return false;

        return true;
    }
})