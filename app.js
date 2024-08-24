let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
let iteam = document.querySelectorAll('.iteam')
document.querySelector('.side').appendChild(iteam[0])
})

prev.addEventListener('click', function(){
let iteam = document.querySelectorAll('.iteam')
document.querySelector('.side').prepend(iteam[iteam.length-1])
})