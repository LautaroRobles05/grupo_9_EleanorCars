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
        let errorFirstName = document.querySelector('.errorFirstName') //capturar el input que se crea cuando se detecta un error
        if (firstName.value < 2) { //verificando que el input no cumpla la condición
            errores.push('error de inputs 1') //pusheamos mensaje de error a array de errores
            if(!errorFirstName) { //si errorFirstName es undifined (esto se hace para evitar repeticiones en la impresión del error) procedemos a enviar el error a la vista
                errorFirstName = document.createElement('p'); //creamos la etiqueta que va a devolver el error
                errorFirstName.textContent = "El nombre debe tener al menos 2 caracteres" //error en cuestion
                errorFirstName.classList.add('errorFirstName'); //añadimos la clase para luego verificar si esta ya existe
                errorFirstName.style.color = 'red' //estilos
                errorFirstName.style.fontSize = 'small' //estilos
                divFirstName.insertBefore(errorFirstName, divFirstName.lastChild) //accedemos al ultimo hijo del div para colocar el error
                
            }
        } else {
            errorFirstName.remove()
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
            }
        } else {
            errorLastName.remove()
        }

        let errorEmail = document.querySelector('.errorEmail')
        if (!validarEmail(email.value)) { //validamos formato email con test de regEx en funcion creada en linea 9
            errores.push('error de inputs 3')
            if(!errorEmail) {
                errorEmail = document.createElement('p');
                errorEmail.textContent = "Formato de email incorrecto"
                errorEmail.classList.add('errorEmail');
                errorEmail.style.color = 'red'
                errorEmail.style.fontSize = 'small'
                divEmail.insertBefore(errorEmail, divEmail.lastChild)
            }
        } else {
            errorEmail.remove()
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
            }
        } else {
            errorNickname.remove()
        }

        let errorPassword = document.querySelector('.errorPassword')
        if (!validarPassword(password.value)) { //validamos con el test de regEx que cumpla la condición del valor de pw con la funcion creada en linea 15
            errores.push('error de inputs 5')
            if(!errorPassword) {
                errorPassword = document.createElement('p');
                errorPassword.textContent = 'La contraseña deberá tener letras mayúsculas, minúsculas, por lo menos un número y un carácter especial de estos *[@$!%*?&]'
                errorPassword.classList.add('errorPassword');
                errorPassword.style.color = 'red'
                errorPassword.style.fontSize = 'small'
                divPassword.insertBefore(errorPassword, divPassword.lastChild)
            }
        } else {
            errorPassword.remove()
        }

        let errorConfPassword = document.querySelector('.errorConfPassword')
        if (password.value != confirmPassword.value) { //negamos coincidencia en password y confirmPassword 
            errores.push('error de inputs 6')
            if(!errorConfPassword) {
                errorConfPassword = document.createElement('p');
                errorConfPassword.textContent = 'Las contraseñas no coinciden'
                errorConfPassword.classList.add('errorConfPassword');
                errorConfPassword.style.color = 'red'
                errorConfPassword.style.fontSize = 'small'
                divConfPassword.insertBefore(errorConfPassword, divConfPassword.lastChild)
            }
        } 

        if(errores.length > 0) { //verificamos que la longitud del array sea mayor que 0
            errores = []
            console.log('hola estoy en el prevent') //reseteamos el array de errores para volver a checkear información
            e.preventDefault() //evitamos envio de formulario
        } 
    })
}