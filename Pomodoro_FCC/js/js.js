var breakDecrement = document.querySelector('.break-decrement');
var breakIncrement = document.querySelector('.break-increment');
var workDecrement = document.querySelector('.work-decrement');
var workIncrement = document.querySelector('.work-increment');
var clock = document.querySelector('.clock');
var breakTime = document.querySelector('.break').innerHTML;
var workTime = document.querySelector('.work').innerHTML;
var time = document.querySelector('.time').innerHTML;



breakDecrement.addEventListener('click', () => {
   if (breakTime !== 0) {
      breakTime--;
      console.log(breakTime);
      document.querySelector('.break').innerHTML = breakTime;
      document.querySelector('.time').innerHTML = breakTime;
   }
})

breakIncrement.addEventListener('click', () => {
   breakTime++;
   console.log(breakTime);
   document.querySelector('.break').innerHTML = breakTime
   document.querySelector('.time').innerHTML = breakTime
})

workDecrement.addEventListener('click', () => {
   if (workTime !== 0) {
      workTime--;
      console.log(workTime);
      document.querySelector('.work').innerHTML = workTime
      document.querySelector('.time').innerHTML = workTime
   }
})

workIncrement.addEventListener('click', () => {
   workTime++;
   console.log(workTime);
   document.querySelector('.work').innerHTML = workTime;
   document.querySelector('.time').innerHTML = workTime;
})

clock.addEventListener('click', () => {
   if (time !== 0) {
      var interval = setInterval(function () {
         time--
         document.querySelector('.time').innerHTML = time
         console.log(time);

         if (time === 0) {
            clearInterval(interval)
         }
      }, 1000);
   }
})