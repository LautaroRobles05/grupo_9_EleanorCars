function setReservaVacio() {
    cartRows.innerHTML = `
    <tr>     
        <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes reserva</div></td>
    </tr>            
    `;
  }
  function vaciarReserva() {
    localStorage.removeItem("reserva");
  }