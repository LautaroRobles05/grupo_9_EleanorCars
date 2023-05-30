

function setReservaVacio() {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes reserva</div></td>
    </tr>            
    `;
}

function vaciarReserva() {
    localStorage.removeItem("reserva");
    window.location.href = "http://localhost:3009/cart"
}

let cartRows = document.querySelector('.cartRows')
let totalAmount = document.querySelector('.totalAmount')

if(localStorage.reserva){
   let reserva = JSON.parse(localStorage.reserva)
   console.log(reserva)
   fetch (`http://localhost:3009/api/products/detail/${reserva[0].id}`)
   .then(res => res.json())
   .then(product => {
    console.log(product)
    cartRows.innerHTML += `
    <tr>     
        <td><img src="images/products/${product.productImages[0].name}" alt="" class="img-fluid"></td>
        <td class="text-center">${product.model.brand.name}</td>
        <td class="text-center">${product.model.name}</td>
        <td class="text-center">${product.year}</td>
        <td class="text-center text-warning">En proceso</td>
        <td class="text-center">${(product.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</td>
        <td class="delete">
        <button class="btn btn-danger btn-sm" onclick=vaciarReserva()>
            <i class="fas fa-trash"></i>
        </button>
        </td>
    </tr>     
    `;
    totalAmount.innerText = (product.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })
   })
    
} else {
    setReservaVacio();
}

