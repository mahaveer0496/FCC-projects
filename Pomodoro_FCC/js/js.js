var breakDecrement = document.querySelector('.break-decrement');
var breakIncrement = document.querySelector('.break-increment');
var workDecrement = document.querySelector('.work-decrement');
var workIncrement = document.querySelector('.work-increment');
var breakTime = document.querySelector('.break').innerHTML;
var workTime = document.querySelector('.work').innerHTML;

breakDecrement.addEventListener('click', () => {
   breakTime--;
   console.log(breakTime);
   document.querySelector('.break').innerHTML = breakTime
})

breakIncrement.addEventListener('click', () => {
   breakTime++;
   console.log(breakTime);
   document.querySelector('.break').innerHTML = breakTime

})

workDecrement.addEventListener('click', () => {
   workTime--;
   console.log(workTime);
   document.querySelector('.work').innerHTML = workTime

})

workIncrement.addEventListener('click', () => {
   workTime++;
   console.log(workTime);
   document.querySelector('.work').innerHTML = workTime

})