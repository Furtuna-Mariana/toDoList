const toDoList = localStorage.getItem('myToDo') ? JSON.parse(localStorage.getItem('myToDo')) : []

const addToDoForm = document.getElementById('addToDo')
const inclompleteToDo = document.getElementById('incopleteToDo')
const completedToDo = document.getElementById('completedToDo')
const formTitle = document.getElementById('toDoTitle')
const formDecription = document.getElementById('toDoDescription')



const addListItem = (arr, parrent) => {
    const listTitle = document.createElement('div')   
    const listDecription = document.createElement('div')   
    const listCheck = document.createElement('input') 
    const wrapper = document.createElement('div') 
    const toDoDetailsWrapper = document.createElement('div')    

    wrapper.classList.add('toDoWrapper')
    listCheck.setAttribute('type', 'checkbox')
    arr.forEach((item) => {        
        listTitle.innerText = item.title  
        listDecription.innerText = item.description 
        toDoDetailsWrapper.appendChild(listTitle)
        toDoDetailsWrapper.appendChild(listDecription)
        wrapper.appendChild(listCheck)
        wrapper.appendChild(toDoDetailsWrapper)        

        parrent.appendChild(wrapper)        
        listCheck.addEventListener('click', (event) => {
            if(event.target.checked) {
                completedToDo.appendChild(wrapper)                                
            } else {
                inclompleteToDo.appendChild(wrapper)                
            }
        })
    })
}




addListItem(toDoList, inclompleteToDo)

const addToDo = (event) => {
    event.preventDefault()    
    const data = new FormData(event.target)    
    const toDo = Object.fromEntries(data.entries())
    toDoList.push(toDo)
    localStorage.setItem('myToDo', JSON.stringify(toDoList))
    addListItem(toDoList, inclompleteToDo)
    formTitle.value = ''
    formDecription.value = ''
    
}

addToDoForm.addEventListener('submit', (event) => {
    addToDo(event)
})





