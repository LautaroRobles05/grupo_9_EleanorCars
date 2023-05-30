
const reserveButton = document.getElementById('reserva')
window.addEventListener('DOMContentLoaded', ()=> eventDetail())


const eventDetail = ()=>{
    reserveButton.addEventListener('click', async (e) =>{
      e.preventDefault()
      
      const confirmation = await sweetConferm()
      
      if(confirmation.isConfirmed && !(localStorage.reserva)){
        localStorage.setItem('reserva', JSON.stringify([{id: e.target.dataset.id}]))
        window.location.href = 'http://localhost:3009/cart'
      }
        
    })
}

const sweetConferm = async () => {
    const confirm = await Swal.fire({
      title: '¿Confirmar reserva?',
      icon: 'question',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'grey',
      denyButtonColor: '#d33',
      confirmButtonText: 'Reservar',
      denyButtonText: 'No reservar',
      cancelButtonText: 'Cancelar'
    })
    if (confirm.isConfirmed && !(localStorage.reserva)) {
      await Swal.fire(
        'Reserva generada!',
        'En los proximos dias un asesor se contactara contigo via email o telefono.',
        'success'
      )
    } else if (confirm.isConfirmed && localStorage.reserva){
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Ya tenes una reserva pendiente!'
      })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Reserva cancelada!'
      })
    }
    return confirm
}