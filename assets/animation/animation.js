
var my_text=document.querySelector('h3').innerText
var h4=document.querySelector('h4')
var val=my_text.split("")
document.querySelector('h3').innerText=null
console.log(val);
var i=0
var interval= setInterval(() => {
    console.log(val[i]);
    h4.innerHTML+=val[i]
    i++
  
}, 200);

setInterval(() => {
    
    if(i==val.length)
    {
        clearInterval(interval)
    }
});