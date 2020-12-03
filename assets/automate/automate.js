var username='amine'
var email='amine@3wacademy.ma'
var password='amine1234'
var i=0
var j=0
var k=0



document.querySelector('button').addEventListener('click',function(){

    ////////first input
    
    var userInput=document.querySelectorAll('input')[0]

var interval1=setInterval(() => {
    userInput.value+=username[i]
    i++
}, 300);

setInterval(() => {
    
    if(i==username.length)
    {
        clearInterval(interval1)
    }
});

/////////second input



var emailInput=document.querySelectorAll('input')[1]
setTimeout(() => {
    
    
    var interval2=setInterval(() => {
        emailInput.value+=email[j]
        j++
    }, 300);
    
    setInterval(() => {
        
        if(j==email.length)
        {
            clearInterval(interval2)
        }
    });
}, 2000);



//////////last input

var passInput=document.querySelectorAll('input')[2]
setTimeout(() => {
    
    var interval3=setInterval(() => {
        passInput.value+=password[k]
        k++
    }, 300);
    
    setInterval(() => {
        
        if(k==password.length)
        {
            clearInterval(interval3)
        }
    });
}, 8000);



setTimeout(() => {
    
    
/// target tbody
var tbody=document.querySelector('tbody')
/// create tr
var tr=document.createElement('tr')
/// create 3 td
var td1=document.createElement('td')
var td2=document.createElement('td')
var td3=document.createElement('td')

/// add value for each td this values comming from inputs
td1.appendChild(document.createTextNode(userInput.value))
td2.appendChild(document.createTextNode(emailInput.value))
td3.appendChild(document.createTextNode(passInput.value))

//// finaly add the td into tr
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)

///// add the tr to tbody

tbody.appendChild(tr)

}, 12000);
})