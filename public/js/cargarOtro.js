document.addEventListener('DOMContentLoaded',()=>{
    iniciarOtro()
})

function iniciarOtro(){
    let modelo = document.getElementById('model_id');
    let brand = document.getElementById('brand_id');
    let color = document.getElementById('color_id');
    
    
    let inputBrand = document.getElementById('nuevaMarca');
    let inputModel = document.getElementById('nuevoModelo');
    let inputColor = document.getElementById('nuevoColor');
    
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