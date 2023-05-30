
document.addEventListener('DOMContentLoaded', () => {

  //DROPDOWN BURGUER MENU
  let subMenuBurguerMobile = document.getElementById('subMenuBurguerMobile')
  let profileBurguerDropdownMobile = document.querySelector('.burguer-menu')

  profileBurguerDropdownMobile.addEventListener('click', () => {
    subMenuBurguerMobile.classList.toggle("open-menu")
    // subMenuBurguerMobile.classList.toggle("z-index")
    subMenuMobile.classList.remove("open-menu")

  })

  //DROPDOWN PROFILE MOBILE
  let subMenuMobile = document.getElementById('subMenuMobile')
  let profileDropdownMobile = document.querySelector('.profile-menu')
  
  profileDropdownMobile.addEventListener('click', () => {
    subMenuMobile.classList.toggle("open-menu")
    // subMenuMobile.classList.toggle("z-index")
    subMenuBurguerMobile.classList.remove("open-menu")


  })
  
  

  //DROPDOWN HIGH RESOLUTIONS
  let subMenu = document.getElementById('subMenu')
  let profileDropdown = document.getElementById('profile-dropdown')
  
  profileDropdown.addEventListener('click', () => {
    subMenu.classList.toggle("open-menu")
    
  })
  
})