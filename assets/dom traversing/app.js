// var listitem=document.querySelectorAll('.list-group-item')[2]
// var val
// ///get parent element
// val=listitem.parentElement
// ////get className of parent element
// val=listitem.parentElement.className

// ////get next element
// val=listitem.nextElementSibling.innerHTML
// ///get previous element
// val=listitem.previousElementSibling.innerHTML
// // get class name
// val=listitem.previousElementSibling.classList.contains('list-group-item')

// //remove element 
// // val=listitem.previousElementSibling.remove()


// ////////////event and remove element 
// document.querySelector('.list-group').addEventListener('click',function(e){
//     if(e.target.classList.contains("btn-danger"))
//     {
//         console.log(e.target.parentElement.remove())
//     }
// })



var table=[]

/////add new task....................
//get ul class
var ul=document.querySelector('.list-group')
//get input class
var input=document.querySelector('.form-control')
//get btn class
var btn=document.querySelector('.btn-success')


function addNewTask()
{

//execute this event when we click at the button
btn.addEventListener('click',function(){
   ///create li element
    var li=document.createElement('li')
    /// add class to this element created
    li.className='list-group-item'
    //create span element
    var span=document.createElement('span')
    //add text inside span element
    span.appendChild(document.createTextNode(input.value))
   /// add span inside li element
    li.appendChild(span)
    

    // create delete button for each Li
    var button=document.createElement('button')
    /// add class to this button
    button.className='btn btn-danger float-right'

    /// add the X symbol inside this button
    button.appendChild(document.createTextNode('X'))
   /// append this button inside the li
    li.appendChild(button)

    /// append the li inside Ul
    ul.appendChild(li)

    addToLocalStorage(input.value)

})
}
addNewTask()



// add to localStorage
function addToLocalStorage(text){
    table.push(text)
    localStorage.setItem('tasks',JSON.stringify(table))
    console.log(table);
 }


/// load task from table

function loadTaskFromTable(){
   if(localStorage.getItem('tasks')==null)
   {
       table=[]
   }else{

  
      table=JSON.parse(localStorage.getItem('tasks'))
    for (let i = 0; i < table.length; i++) {
         ///create li element
         var li=document.createElement('li')

         /// add class to this element created
         li.className='list-group-item'

         //create span element
         var span=document.createElement('span')

         //add text inside span element
         span.appendChild(document.createTextNode(table[i]))

        /// add span inside li element
         li.appendChild(span)
         
         // create delete button for each Li
         var button=document.createElement('button')

         /// add class to this button
         button.className='btn btn-danger float-right'

     
         /// add the X symbol inside this button
         button.appendChild(document.createTextNode('X'))
        /// append this button inside the li
         li.appendChild(button)
     
         /// append the li inside Ul
         ul.appendChild(li)
    }
}
}
loadTaskFromTable()


////////// delete Button//////

function deleteItemFromDom(){

    ul.addEventListener('click',function(e){
        if(e.target.classList.contains('btn-danger')){
    
            //// get the text content of span element because span element is the first child of li element
            removeFromTable(e.target.parentElement.children[0].textContent)
      
            /// delete parent element
             e.target.parentElement.remove()
        }
    
    
    })
}
deleteItemFromDom()
/////// create remove function to remove the element coming as param

function removeFromTable(text)
{

    //check the position of text coming from function above and store it inside variable textPosition
    var textPosition=table.indexOf(text)

    /// delete this element from table using variable textPosition 
    table.splice(textPosition,1)


    // insert the whole table in localstorage
    localStorage.setItem('tasks',JSON.stringify(table))

}




/////////search function

function searchItem()
  {

document.getElementById('search').addEventListener('keyup',function(e){
    
    //// get all li element using querySelectorAll
    var items=document.querySelectorAll('li')

    /// get the value coming from textbox and put this value into the variable
    // and convert the text tolowercase
    var input=e.target.value.toLowerCase()


    //loop through  this li items
    for (let i = 0; i < items.length; i++) {


        /// get the text content of each first child 
        //NOTICE : the first child of each li is <span> </span>
        var item=items[i].firstChild.textContent.toLowerCase()
      
        //check if the text coming from input is exist inside item variable
        if(item.indexOf(input)!=-1)
        {

            //// show all li who has this text
            items[i].style.display='block'
        }
        else{

            //hide all li who dosent have this text
            items[i].style.display='none'

        }
        
    }


})
}
searchItem()











































// function removeFromTable(text)
// {
//     table.splice(table.indexOf(text),1)
//     console.log(table);
// }


// //search task

// document.querySelector('.search').addEventListener('keyup',function(e){
//     const text=e.target.value
//     const li=document.querySelectorAll('li')
//     for (let i = 0; i < li.length; i++) {
//         const item=li[i].firstChild.textContent
//         if(item.toLowerCase().indexOf(text)!=-1){
//             li[i].style.display = 'block';
//           } else {
//             li[i].style.display = 'none';
//           }
//     }
// })