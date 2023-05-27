const reserveButton = document.getElementById('reserva')

window.addEventListener('DOMContentLoaded', ()=> eventDetail())

const eventDetail = ()=>{
    reserveButton.addEventListener('click', async (e)=>{
        e.preventDefault()
        
        const confirmation = await sweetConferm()
        
        if(confirmation.isConfirmed){
          window.location.href = 'http://localhost:3009/delete'
        }
        
    })
}

const sweetConferm = async () => {
    const confirm = await Swal.fire({
      title: '¿Confirmar reserva?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reservar',
      cancelButtonText: 'Cancelar'
    })
    if (confirm.isConfirmed) {
      await Swal.fire(
        'Reserva generada!',
        'En los proximos dias un asesor se contactara contigo via email o telefono.',
        'success'
      )
    }
    return confirm
}