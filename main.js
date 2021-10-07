document.addEventListener('DOMContentLoaded',(event) => {

   const firstStep = document.querySelector('.form__first-step');
   const secondStep = document.querySelector('.form__second-step');
   const nextBtn = document.querySelector('.form__next-btn');
   const ball = document.querySelector('.ball');
   const ballContainer = document.querySelector('.field');
   const openBtn = document.querySelector('.open-field__btn');
   const closeBtn = document.querySelector('.close-field__btn ');

   const nextStep = (e) => {
      e.preventDefault();
      firstStep.classList.add('d-none');
      secondStep.classList.remove('d-none');
   }
   const openFieldHandler = () => {
      ballContainer.classList.toggle('return-field');
      openBtn.classList.toggle('d-none');
      ballContainer.style.position = 'relative'
   }
   const closeFieldHandler = () => {
      ballContainer.classList.toggle('return-field');
      openBtn.classList.toggle('d-none');
      ballContainer.style.position = 'absolute'
   }

   const myMove = () => {
      let position = 0;
      const id = setInterval(frame,0);
      function frame() {
         if (position === 350) {
            clearInterval(id);
         } else {
            position++;
            ball.style.top = position + 'px';
            ball.style.left = position + 'px';
         }
      }
   }

   nextBtn.addEventListener('click',nextStep)
   openBtn.addEventListener('click',openFieldHandler)
   closeBtn.addEventListener('click',closeFieldHandler)
   ball.addEventListener('click',myMove)

});