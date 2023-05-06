document.addEventListener('DOMContentLoaded', async () => {

    let brandId = document.getElementById('brand_id').value
    let modelo = document.getElementById('model_id')
    let valueSelect = document.getElementById('model_id').value
    
    const rutaActual = window.location.pathname;

    // Obtener el ID del producto de la ruta
    const idProducto = rutaActual.split("/")[3];

    
    
    
    

    const res = await fetch(`http://localhost:3009/api/products/marca_modelo/${brandId}`)
    const data = await res.json()
    let models = data.models
    

    modelo.innerHTML = ``
    if(models.length){
        models.forEach(model => {
            if(model.id == valueSelect){
                modelo.innerHTML += `<option value="${model.id}" selected> ${model.name} </option>`

            } else {
                modelo.innerHTML += `<option value="${model.id}"> ${model.name} </option>`
            }
        });
    }
    
})


