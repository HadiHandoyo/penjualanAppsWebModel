function validateName(){
    let name = document.forms['registForm']['nameId'].value

    let letters = /^[A-Za-z]+$/

    if(name.match(letters)){
        console.log('true')
        return true;
    }else{
        alert('name should be filled with character')
        return false;
    }
}




function validateAlamat(){
    let alamat = document.forms['registForm']['alamatId'].value
    if(alamat.length != 0){
        console.log('true')
        return true;
    }else{
        alert('Please fill alamat')
        return false;
    }
}

function validateTanggalLahir(){
    let ttl = document.forms['registForm']['ttlId']
    if(ttl.value){
        console.log('true');
        return true;
    }else{
        alert('please fill the tanggal lahir section');
        return false;
    }
}

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
        console.log('email sucess')
        return true;
    }
}

function validatePhone(){
    let Phone = document.getElementById('noTelpId').value;
    let length = Phone.length;
    let cek = 0;
    if(length == 0){
        alert('Fill the nomor telepon')
        return false;
    }else{
        for(let i = 0; i++<length; i++){
            let test = Phone.charAt(i);
            if(isNaN(test)){
                cek++
            }
        }
        if(cek == 0){
            console.log('true');
            return true;
        }else if(cek != 0){
            alert('nomor telepon must be numeric');
            return false;
        }
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


let form = document.getElementById('registForm')

    // form.addEventListener('submit', function(e){
    //     // e.preventDefault();
    //     validateName();
    //     validateAlamat();
    //     validateTanggalLahir();
    //     validateEmail();
    //     valPass();
    //     validatePhone();
    // })


form.addEventListener('submit', function(e){
            let nameValid = validateName();
            let alamatValid = validateAlamat();
            let ttlValid = validateTanggalLahir();
            let emailValid = validateEmail();
            let noTelpValid = validatePhone();
            let passValid = valPass();
    
            if(nameValid == false && alamatValid == false && ttlValid == false && emailValid == false && noTelpValid == false && passValid == false){
                    e.preventDefault();
                }else{
                    alert('account registered')
        }
    })


