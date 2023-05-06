let modelo = document.getElementById('model_id')
let brand = document.getElementById('brand_id')


brand.addEventListener('change', actualizarMarcas);

async function actualizarMarcas () {
    const brandId = this.value;
    if(brandId != 0){
        const res = await fetch(`http://localhost:3009/api/products/marca_modelo/${brandId}`)
        const data = await res.json()
        let models = data.models
        
        modelo.innerHTML = ``
    
        if(models.length){
            models.forEach(model => {
                modelo.innerHTML += `<option value="${model.id}"> ${model.name} </option>`
            });
        } else {
            modelo.innerHTML = `<option value="0"> Sin Modelos </option>`
        }
    } else {
        modelo.innerHTML = `<option value="0"> Sin Modelos </option>`
    }
}
