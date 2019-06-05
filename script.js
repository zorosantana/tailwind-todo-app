const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const todoInput = document.getElementById('todo-input')

const newTodo = () => {
  
  if (! todoInput.checkValidity()) {
    alert("Your TODO title is missing")
    
    return false
  }

  list.insertAdjacentHTML('beforeend', todoTemplate(todoInput.value))
  list.lastElementChild.querySelector('.close-btn').addEventListener('click', deleteTodo)

  itemCountSpan.innerHTML++
  uncheckedCountSpan.innerHTML++

  todoInput.value = ""
}

const checkTodo = (el) => {
  el.classList.toggle('checked')

  if (el.classList.contains('checked')) {
    uncheckedCountSpan.innerHTML--
  } else {
    uncheckedCountSpan.innerHTML++
  }
}

const deleteTodo = (el) => {  
  const todoContainer = el.target.parentElement

  todoContainer.parentNode.removeChild(el.target.parentElement)

  if (! todoContainer.querySelector('.checked')) {
    uncheckedCountSpan.innerHTML--
  }

  itemCountSpan.innerHTML--
}

const todoTemplate = (todoTitle) => `
  <div class="todo-container text-gray-700 text-center mt-2">
    <div class="flex justify-between bg-yellow-100 shadow mb-2">
      <span class="w-full text-left leading-loose p-2 pl-10 cursor-pointer" onClick="checkTodo(this)">${todoTitle}</span>
      <div class="close-btn p-2 pr-8 text-xl cursor-pointer"></div>
    </div>
  </div>
`