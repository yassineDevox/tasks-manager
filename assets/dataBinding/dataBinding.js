/////get the value from input
var text_secondary=document.querySelector('h1')
document.querySelector('.form-control')
.addEventListener("keyup",function(e){
    console.log(e.target.value)
    text_secondary.innerHTML=e.target.value
})