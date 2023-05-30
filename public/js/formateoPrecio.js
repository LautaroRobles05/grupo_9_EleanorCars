document.addEventListener('DOMContentLoaded',()=>{
    let divPrice = document.getElementsByClassName('price')
    Array.from(divPrice).forEach(precio => {
        let precioNumber = parseFloat(precio.textContent)
        const formattedPrice = precioNumber.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
        
        precio.textContent = formattedPrice
        
    })

    
})