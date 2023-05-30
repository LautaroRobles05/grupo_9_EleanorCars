const deleteButton = document.getElementById('delete')



window.addEventListener('DOMContentLoaded', ()=> eventDetail())
console.log(deleteButton)
const eventDetail = ()=>{
    deleteButton.addEventListener('submit', async (e)=>{
        e.preventDefault()
        
        const confirmation = await sweetConferm()
        
        if(confirmation.isConfirmed){
          this.SubmitEvent()
          await fetch (`http://localhost:3009/api/users/delete/${deleteButton.dataset.userdelete}`, {
            method: "delete"
          })
          window.location.href = 'http://localhost:3009/'
        }
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