const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const newTodo = () => {
  const todoItem = document.createElement('li');

  todoItem.classList.add(classNames.TODO_ITEM);
  todoItem.append(createTodoCheckbox());
  todoItem.append(createTodoRemoveButton());
  todoItem.append(createTodoText());

  list.append(todoItem);

  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;
}

const createTodoCheckbox = () => {
  const todoCheckbox = document.createElement('input');

  todoCheckbox.type = "checkbox";
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX);

  todoCheckbox.addEventListener('change', (el) => handleTodoCheckbox(el));

  return todoCheckbox;
}

const createTodoRemoveButton = () => {
  const todoRemoveButton = document.createElement('button');

  todoRemoveButton.classList.add('button', classNames.TODO_DELETE);
  todoRemoveButton.innerHTML = 'Remove';

  todoRemoveButton.addEventListener('click', (el) => handleTodoDeletion(el));

  return todoRemoveButton;
}

const createTodoText = () => {
  const todoText = document.createElement('span');

  todoText.classList.add(classNames.TODO_TEXT);
  todoText.innerHTML = 'Todo';

  return todoText;
}

const handleTodoCheckbox = (el) => {
  if (el.target.checked) {
    uncheckedCountSpan.innerHTML--;
  } else {
    uncheckedCountSpan.innerHTML++;
  }
}

const handleTodoDeletion = (el) => {
  let newItemCount = 0;
  let newUncheckedCount = 0;

  el.target.parentElement.parentNode.removeChild(el.target.parentElement);

  const allTodoItems = [...document.getElementsByClassName(classNames.TODO_ITEM)];

  list.innerHTML = '';

  allTodoItems.forEach((item) => {
    list.append(item);

    newItemCount++;

    if (! item.firstChild.checked) {
      newUncheckedCount++;
    }
  });

  itemCountSpan.innerHTML = newItemCount;
  uncheckedCountSpan.innerHTML = newUncheckedCount;
}