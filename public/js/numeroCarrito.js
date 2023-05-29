function productosEnReserva(){
    return localStorage.reserva ? JSON.parse(localStorage.reserva).length : 0
} 
const cantidadReserva = document.querySelectorAll('.cantidad')

document.addEventListener('DOMContentLoaded', () => {
    cantidadReserva.forEach(logo => {
        logo.innerText = productosEnReserva()
    })
})