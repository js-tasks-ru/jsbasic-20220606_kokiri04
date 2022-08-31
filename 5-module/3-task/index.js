function initCarousel() {

  let elemslide = document.querySelectorAll('.carousel__slide')

  let elem = document.querySelector('.carousel__inner')

  let elemWidth = elem.offsetWidth

  let btnr = document.querySelector('.carousel__arrow_right')
  let btnl = document.querySelector('.carousel__arrow_left')

  let position = 0

  const checkbtm1 = () => {
    if (position === 0) {
    btnl.style.display = 'none'
    } else {
      btnl.style.display = ''
    }
    }

    const checkbtm2 = () => {
      if (position === -elemWidth * (elemslide.length -1)) {
      btnr.style.display = 'none'
      } else {
        btnr.style.display = ''
      }
      }
  
  

  btnl.style.display = 'none'

  btnr.addEventListener('click', () => {

  position -= elemWidth;

  position = Math.max(position, -elemWidth * (elemslide.length -1))

  elem.style.transform = 'translateX(' + position + 'px)';

  checkbtm1();

  checkbtm2();



  });

 
  btnl.addEventListener('click', () => {

  position += elemWidth;

  position = Math.min(position, 0)

  elem.style.transform = 'translateX(' + position + 'px)'

  checkbtm1();

  checkbtm2();



 });



 
}