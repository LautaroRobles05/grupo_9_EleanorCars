document.addEventListener('DOMContentLoaded',()=>{
    
    let modelo = document.getElementById('model_id');
    let brand = document.getElementById('brand_id');
    let color = document.getElementById('color_id');
    
    
    let inputBrand = document.getElementById('nuevaMarca');
    let inputModel = document.getElementById('nuevoModelo');
    let inputColor = document.getElementById('nuevoColor');
    
    iniciarOtro(modelo, brand, color, inputBrand, inputModel, inputColor)
    ejecutarInicio(modelo, brand, color, inputBrand, inputModel, inputColor)
    
})

function iniciarOtro(modelo, brand, color, inputBrand, inputModel, inputColor){
    
    
    brand.addEventListener('change',(evt)=>{
    
        if(evt.target.value == 0){ //
          
            inputBrand.style.display = 'block'
            inputModel.style.display = 'block'
            modelo.style.display = 'none'

        // } else if (modelo.value == 0){

        //     inputBrand.style.display = 'block'
        //     inputModel.style.display = 'none'
        //     modelo.style.display = 'block'

        } else {//

            inputBrand.style.display = 'none'
            inputModel.style.display = 'none'
            modelo.style.display = 'block'
        }
    })
    

    color.addEventListener('change',(evt)=>{
        
        if(evt.target.value == 0){ //
          
            inputColor.style.display = 'block'

        }  else {//

            inputColor.style.display = 'none'
        }
    })

    
  
}

function ejecutarInicio (modelo, brand, color, inputBrand, inputModel, inputColor) {
    
    
        if(brand.value == 0){ //
          
            inputBrand.style.display = 'block'
            inputModel.style.display = 'block'
            modelo.style.display = 'none'

        // } else if (modelo.value == 0){

        //     inputBrand.style.display = 'block'
        //     inputModel.style.display = 'none'
        //     modelo.style.display = 'block'

        } else {//

            inputBrand.style.display = 'none'
            inputModel.style.display = 'none'
            modelo.style.display = 'block'
        }

        if(color.value == 0){ //
          
            inputColor.style.display = 'block'

        }  else {//

            inputColor.style.display = 'none'
        }
    
}