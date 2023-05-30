let tipo = document.getElementById('tipo')
let marca = document.getElementById('brand_id')
let model = document.getElementById('model_id')


tipo.addEventListener('change', actualizarMarcas);

async function actualizarMarcas () {
    const tipoId = this.value;

    let res;
    
    if(tipoId != 0){
        res = await fetch(`http://localhost:3009/api/products/tipo_marca/${tipoId}`);
    } else {
        res = await fetch(`http://localhost:3009/api/products/tipo_marca`);
    }

    const brands = await res.json();
    
    marca.innerHTML = ``
    
    if(brands.length){
        marca.innerHTML += `<option value="0"> Cualquiera </option>`
        brands.forEach(brand => {
            marca.innerHTML += `<option value="${brand.id}"> ${brand.name} </option>`
        });

        model.innerHTML = `<option value="0" disable selected> Cualquiera </option>`

    } else {
        marca.innerHTML = `<option value="0"> Sin Marcas </option>`
        model.innerHTML = `<option value="0"> Sin Modelos </option>`
    }
}
