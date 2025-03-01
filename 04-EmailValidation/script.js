let emailId = document.getElementById('email-input');

let errorMessage = document.getElementById('email-input-message');
let icon = document.getElementById('icon');


function checker(){
    icon.style.display = 'inline-block';
    let email = emailId.value.trim();

    if(email ===""){
        icon.style.display = 'none';
        errorMessage.style.display= 'none';
    }else if(validateEmail(email)){
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = 'green';

        errorMessage.style.display = 'none';
        emailId.style.border = '2px solid green'
    }else{
        emailId.style.border = '2px solid red'
        errorMessage.style.display = 'block';
    }
}

function validateEmail(email){
    if(email.includes(',')){
        return false;
    }
    let atIndex = email.indexOf("@")

    let dotIndex=email.lastIndexOf(".");

    if(
        atIndex > 0 && 
        dotIndex > atIndex + 1 &&
        dotIndex < email.length - 2
    ){
        return true;
    }else{
        return false;
    }
}