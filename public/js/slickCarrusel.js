document.addEventListener('DOMContentLoaded', () => {
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'
      });


     
})

let imagen = document.querySelector('.container_img_top');

imagen.addEventListener('mousedown', function() {
  image.style.cursor = 'grab';
});

imagen.addEventListener('mouseleave', function() {
  document.body.style.cursor = 'default';
});

let imagen2 = document.querySelector('.container_img');

imagen2.addEventListener('mousedown', function() {
  imagen2.style.cursor = 'grab';
});

imagen2.addEventListener('mouseleave', function() {
  imagen2.style.cursor = 'default';
});