const deleteButton = document.querySelectorAll('.delete')



window.addEventListener('DOMContentLoaded', ()=> eventDetail())
console.log(deleteButton)
const eventDetail = ()=>{
    deleteButton.forEach(buton => {
        
        buton.addEventListener('submit', async (e)=>{
            e.preventDefault()
            
            const confirmation = await sweetConferm()
            
            if(confirmation.isConfirmed){
                await fetch (`http://localhost:3009/api/users/delete/${buton.dataset.userdelete}`, {
                    method: "delete"
                })
                window.location.href = 'http://localhost:3009/user/list'
            }
    
            
        })
    })
}

const sweetConferm = async () => {
    const confirm = await Swal.fire({
      title: '¿Estas seguro?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar cuenta',
      cancelButtonText: 'Cancelar'
    })
    if (confirm.isConfirmed) {
      await Swal.fire(
        'Cuenta eliminada!',  
      )
    }
    return confirm
}