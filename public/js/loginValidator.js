document.addEventListener('DOMContentLoaded', () => {
    validarInputs()
})

//formulario
const formulario = document.getElementById('form')

//inputs
const email = document.getElementById('email');
const password = document.getElementById('password');

//divs para feedback del error
const divEmail = document.getElementById('divEmail');
const divPassword = document.getElementById('divPassword');

let errores = [];

function validarInputs(){
    formulario.addEventListener('submit', (e) => {

        let errorEmail = document.querySelector('.errorEmail')
        if (email.value == '') {
            errores.push('error de input email')
            if(!errorEmail) {
                errorEmail = document.createElement('p');
                errorEmail.textContent = "El campo es obligatorio para logearse"
                errorEmail.classList.add('errorEmail');
                errorEmail.style.color = 'red'
                errorEmail.style.fontSize = 'small'
                divEmail.insertBefore(errorEmail, divEmail.lastChild)
                console.log('holis mundo 1')
            }
        }

        let errorPassword = document.querySelector('.errorPassword')
        if (password.value == '') {
            errores.push('error de inputs 5')
            if(!errorPassword) {
                errorPassword = document.createElement('p');
                errorPassword.textContent = 'El campo es obligatorio para logearse'
                errorPassword.classList.add('errorPassword');
                errorPassword.style.color = 'red'
                errorPassword.style.fontSize = 'small'
                divPassword.insertBefore(errorPassword, divPassword.lastChild)
                console.log('holis mundo 2')
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