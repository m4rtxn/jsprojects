const btnElement = document.getElementById('btn')

const palindromeChecker = () =>{
   
    const inputText = document.getElementById("inputText").value;
    console.log(typeof(inputText))
         const result = document.getElementById("result");
    
         if(isPalindrome(inputText)){
            result.textContent = inputText + " es un palindromo";
            result.style.color = "green"
        }else{
            result.textContent = inputText + " no es un palindromo"
            result.style.color = "red"
        }
}

// accion del boton
btnElement.addEventListener('click', palindromeChecker)


function isPalindrome(str) {
    // 1. Eliminar caracteres no alfanuméricos y convertir a minúsculas
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');  
     

    // 2. Convertir la cadena en un arreglo de caracteres
    const cleanStrArray = cleanStr.split('');
    console.log(cleanStr); 
    console.log(cleanStrArray);  

    // 3. Invertir el arreglo, se invierte ya como arreglo
    const reversedArray = cleanStrArray.reverse();
    console.log(reversedArray);

    // 4. Convertir el arreglo invertido de nuevo en una cadena
    const reversedStr = reversedArray.join('');
    console.log(reversedStr);  

    // 5. Comparar la cadena original con la invertida
    return cleanStr === reversedStr;  
}
