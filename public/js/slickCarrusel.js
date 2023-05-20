document.addEventListener('DOMContentLoaded', () => {
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
      });


     
})


let imagen = document.querySelector('.container_img');

imagen.addEventListener('mousedown', function() {
  imagen.style.cursor = 'grab';
});

imagen.addEventListener('mouseleave', function() {
  imagen.style.cursor = 'default';
});