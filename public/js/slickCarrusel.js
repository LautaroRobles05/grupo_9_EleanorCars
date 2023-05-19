document.addEventListener('DOMContentLoaded', () => {
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
      });


     
})


let imagen = document.querySelector('.container_img');

imagen.addEventListener('mousedown', function() {
  imagen.style.cursor = 'grab';
});

imagen.addEventListener('mouseleave', function() {
  imagen.style.cursor = 'default';
});