function validateEmail(){
    let email = document.getElementById('emailId').value;
    let arrEmail = email.split('@')
    if(arrEmail.length != 2){
        alert('Email invalid')
        return false;
    }else if(arrEmail[0].length<=1){
        alert('Email invalid')
        return false;
    }else if(arrEmail[1] != 'email.com'){
        alert('email must ends with email.com')
        return false;
    }else{
        console.log('email true')
        return true;
    }
}

function valPass(){
    let pass = document.getElementById('passwordId').value;
    if(pass.length < 8){
        alert('password must 8 character or more')
        return false;
    }else{
        console.log('password sucess')
        return true;
    }
}

let form = document.getElementById('loginForm')

form.addEventListener('submit', function(e){
    let emailValid = validateEmail();
    let passValid = valPass();

    if(passValid == false && emailValid == false){
            e.preventDefault();
        }else{
            alert('Welcome to aplikasi pembelian')
}
})

