let modelo = document.getElementById('model_id')
let brand = document.getElementById('brand_id')


brand.addEventListener('change', actualizarMarcas);

async function actualizarMarcas () {
    const brandId = this.value;
    const res = await fetch(`http://localhost:3009/api/products/marca_modelo/${brandId}`)
    const data = await res.json()
    let models = data.models
    console.log(models)
    modelo.innerHTML = ``
    if(models.length){
        models.forEach(model => {
            modelo.innerHTML += `<option value="${model.id}"> ${model.name} </option>`
        });
    } else {
        modelo.innerHTML = `<option value=""> Sin Modelos </option>`
    }
}
