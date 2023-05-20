
document.addEventListener('DOMContentLoaded', () => {
  let subMenu = document.getElementById('subMenu')
  let profileDropdown = document.getElementById('profile-dropdown')
  
  profileDropdown.addEventListener('click', () => {
    subMenu.classList.toggle("open-menu")
    
  })
  
})