let brand = document.getElementById('brand_id')
let modelo = document.getElementById('model_id')


brand.addEventListener('change', actualizarMarcas);

async function actualizarMarcas () {
    const marcaId = this.value;

    let res;
    
    modelo.innerHTML = ``
    
    if(marcaId != 0){
        res = await fetch(`http://localhost:3009/api/products/marca_modelo_producto/${marcaId}`);
        let models = await res.json();
        
        
        if(models.length){
            modelo.innerHTML += `<option value="0"> Cualquiera </option>`
            models.forEach(model => {
                modelo.innerHTML += `<option value="${model.id}"> ${model.name} </option>`
            });
        } else {
            modelo.innerHTML = `<option value="0"> Sin Modelos </option>`
        }
    } else {
        modelo.innerHTML = `<option value="0"> Cualquiera </option>`
    }

}
