var task=document.querySelectorAll('input')[0]



var table=[]
    function loadTable(){
        table=JSON.parse(localStorage.getItem('contacts'))  
        for (let i = 0; i < table.length; i++) {
            
            var ul= document.querySelector('.list-group')
            var li=document.createElement('li')
            var button=document.createElement('button')
            button.className='btn btn-danger float-right'
            button.appendChild(document.createTextNode('delete'))
            li.classList.add('list-group-item')
            li.appendChild(document.createTextNode(table[i]))
            li.appendChild(button)
            ul.appendChild(li)
      
    
        }
    }
    
    loadTable()

document.querySelector('.btn-primary').addEventListener('click',function(){
    var ul= document.querySelector('.list-group')
    var li=document.createElement('li')
    li.classList.add('list-group-item')

    var button=document.createElement('button')
    button.className='btn btn-danger float-right'
    button.appendChild(document.createTextNode('delete'))
    li.appendChild(button)
       
    li.appendChild(document.createTextNode(task.value))
    ul.appendChild(li)
    saveInLocalStorage(task.value)
})

function saveInLocalStorage(task){
    table.push(task)
localStorage.setItem('contacts',JSON.stringify(table))
}


document.querySelector('.list-group').addEventListener('click',function(e){
    if(e.target.classList.contains('btn-danger'))
    {
        e.target.parentElement.remove()
        alert(e.target.parentElement.indexOf())
        // deleteFromLocalStorage(e.target.pa)
    }
})

function deleteFromLocalStorage(text){
    alert(text)
    //  table=JSON.parse(localStorage.getItem('contacts'))
    //  table.splice(table.indexOf(text),1)
    //  localStorage.setItem('contacts',JSON.stringify(table))
}
document.querySelector('.btn-danger').addEventListener('click',function(){
    localStorage.clear()
})