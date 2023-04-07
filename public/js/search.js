window.addEventListener('load', function() {

    let selects = document.querySelectorAll('select');
    // console.log(select);
    
    // console.log(opciones1);
    // console.log(opciones1.attributes);
    // console.log(opciones1.label);
    // console.log(opciones1.value);
    


    //console.log(document.querySelectorAll('script'));
    for (let select of selects) {
        select.addEventListener('change', function () {
            let opciones = select.children;
            //console.log(locals.models);
            for (let opcion of opciones) {
                if(opcion.selected){        
                    console.log(select.name,opcion);
                }
            }     
        });
        
    }

        
        
    // for (let opcion of opciones) {
    //     console.log(opcion.value,opcion.selected);  
    //     let atributos = opcion.attributes;
    // }
    
    
    // buttom.addEventListener('mouseout',  function(evento) {
    //     buttom.style.color = "red";
    //     console.log("Saca el mose loca");
    // })  

});