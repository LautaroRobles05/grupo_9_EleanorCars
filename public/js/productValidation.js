document.addEventListener('DOMContentLoaded', (e) => {
    validarProductos()
})

//formulario
const formulario = document.getElementById('form');

//inputs y selects
const productBrand = document.getElementById('brand_id');
const newBrand = document.getElementById('nuevaMarca');
const model = document.getElementById('model_id');
const newModel = document.getElementById('nuevoModelo');
const productColor = document.getElementById('color_id');
const newColor = document.getElementById('nuevoColor');
const gasType = document.getElementById('gasType_id');
const vehicleType = document.getElementById('vehicleType_id')
const doors = document.getElementById('doors');
const transmission = document.getElementById('transmission');
const year = document.getElementById('year');
const price = document.getElementById('price')
const km = document.getElementById('km')
const manufacturing = document.getElementById('manufacturinYear')
const equipment = document.getElementById('equipment')

//divs padres para feedback de errores
const divBrand = document.getElementById('divBrand_id');
const divNewBrand = document.getElementById('divNuevaMarca');
const divModel = document.getElementById('divModel_id');
const divNewModel = document.getElementById('divNuevoModelo');
const divColor = document.getElementById('divColor_id');
const divNewColor = document.getElementById('divNuevoColor');
const divGasType = document.getElementById('divGasType_id');
const divVehicleType = document.getElementById('divVehicleType_id')
const divDoors = document.getElementById('divDoors');
const divTransmission = document.getElementById('divTransmission');
const divYear = document.getElementById('divYear');
const divPrice = document.getElementById('divPrice')
const divKm = document.getElementById('divKm')
const divManufacturing = document.getElementById('divManufacturinYear')
const divEquipment = document.getElementById('divEquipment')

console.log('typof', productBrand.appendChild)

let errores = []

function validarProductos() {
    
    formulario.addEventListener('submit', (e) => {
        let errorBrand = document.querySelector('.errorBrand')
        if (productBrand.value == '1') {
            errores.push('error de inputs 1')
            console.log('error', !errorBrand)
            if(!errorBrand) {
                errorBrand = document.createElement('p');
                errorBrand.textContent = "Debe seleccionar una marca"
                errorBrand.classList.add('errorBrand');
                errorBrand.style.color = 'red'
                errorBrand.style.fontSize = 'small'
                divNewBrand.insertBefore(errorBrand, divNewBrand.lastChild)
                console.log('holis mundo')
            }
        }
        console.log('valor', productBrand.value)
        let errorYear = document.querySelector('.errorYear')
        if (year.value == '') {
            errores.push('error de inputs 1')
            console.log('error', !errorYear)
            if(!errorYear) {
                errorYear = document.createElement('p');
                errorYear.textContent = "Debe seleccionar una marca"
                errorYear.classList.add('errorYear');
                errorYear.style.color = 'red'
                errorYear.style.fontSize = 'small'
                divYear.insertBefore(errorYear, divYear.lastChild)
                console.log('holis mundo')
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

