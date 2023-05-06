document.addEventListener('DOMContentLoaded', (e) => {


    validarInputs()
    
})

//funcion para validar email
function validarEmail(email) {
    let regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

//funcion para validar la contraseña
function validarPassword(password){
    let regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regEx.test(password)
}
console.log('password', validarPassword('Lautaro12@'))


//formulario
const formulario = document.getElementById('form')
//inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
//divs para feedback del error
const divFirstName = document.getElementById('divFirstName')
const divLastName = document.getElementById('divLastName')
const divEmail = document.getElementById('divEmail')
const divNickname = document.getElementById('divNickname')
const divPassword = document.getElementById('divPassword')
const divConfPassword = document.getElementById('divConfPassword')

let errores = []
function validarInputs () {
    
    


    formulario.addEventListener('submit', (e) => {
        let errorFirstName = document.querySelector('.errorFirstName')
        if (firstName.value < 2) {
            errores.push('error de inputs 1')
            if(!errorFirstName) {
                errorFirstName = document.createElement('p');
                errorFirstName.textContent = "El nombre debe tener al menos 2 caracteres"
                errorFirstName.classList.add('errorFirstName');
                errorFirstName.style.color = 'red'
                errorFirstName.style.fontSize = 'small'
                divFirstName.insertBefore(errorFirstName, divFirstName.lastChild)
                console.log('holis mundo')
            }
        }

        let errorLastName = document.querySelector('.errorLastName')
        if (lastName.value < 2) {
            errores.push('error de inputs 2')
            if(!errorLastName) {
                errorLastName = document.createElement('p');
                errorLastName.textContent = "El apellido debe tener al menos 2 caracteres"
                errorLastName.classList.add('errorLastName');
                errorLastName.style.color = 'red'
                errorLastName.style.fontSize = 'small'
                divLastName.insertBefore(errorLastName, divLastName.lastChild)
                console.log('holis mundo 2')
            }
        }

        let errorEmail = document.querySelector('.errorEmail')
        if (!validarEmail(email.value)) {
            errores.push('error de inputs 3')
            if(!errorEmail) {
                errorEmail = document.createElement('p');
                errorEmail.textContent = "Formato de email incorrecto"
                errorEmail.classList.add('errorEmail');
                errorEmail.style.color = 'red'
                errorEmail.style.fontSize = 'small'
                divEmail.insertBefore(errorEmail, divEmail.lastChild)
                console.log('holis mundo 3')
            }
        }
        
        let errorNickname = document.querySelector('.errorNickname')
        if (nickname.value <= 0) {
            errores.push('error de inputs 4')
            if(!errorNickname) {
                errorNickname = document.createElement('p');
                errorNickname.textContent = "Completar su nombre de usuario"
                errorNickname.classList.add('errorNickname');
                errorNickname.style.color = 'red'
                errorNickname.style.fontSize = 'small'
                divNickname.insertBefore(errorNickname, divNickname.lastChild)
                console.log('holis mundo 4')
            }
        }

        let errorPassword = document.querySelector('.errorPassword')
        if (!validarPassword(password.value)) {
            errores.push('error de inputs 5')
            if(!errorPassword) {
                errorPassword = document.createElement('p');
                errorPassword.textContent = 'La contraseña deberá tener letras mayúsculas, minúsculas, por lo menos un número y un carácter especial de estos *[@$!%*?&]'
                errorPassword.classList.add('errorPassword');
                errorPassword.style.color = 'red'
                errorPassword.style.fontSize = 'small'
                divPassword.insertBefore(errorPassword, divPassword.lastChild)
                console.log('holis mundo 5')
            }
        }

        let errorConfPassword = document.querySelector('.errorConfPassword')
        if (!(validarPassword(password.value) && (password.value == confirmPassword.value))) {
            console.log('password', password.value, '\n confirm password', confirmPassword.value)
            errores.push('error de inputs 6')
            if(!errorConfPassword) {
                errorConfPassword = document.createElement('p');
                errorConfPassword.textContent = 'Las contraseñas no coinciden'
                errorConfPassword.classList.add('errorConfPassword');
                errorConfPassword.style.color = 'red'
                errorConfPassword.style.fontSize = 'small'
                divConfPassword.insertBefore(errorConfPassword, divConfPassword.lastChild)
                console.log('holis mundo 6')
            }
        }

        if(errores.length > 0) {
            console.log(errores)
            errores = []
            console.log(errores)
            e.preventDefault()
            
        }
    })
}