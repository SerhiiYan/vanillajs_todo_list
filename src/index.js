
const app = document.getElementById('app');

app.innerHTML = `
  <div class="todos">
    <div class="todos-header">
      <h3 class="todos-title">Todo List</h3>
      <div>
        <p>You have<span class="todos-count"></span> item</p>
        <button type="button" class="todos-clear" style="display: none;">
          Clear Completed
        </button>
      </div>
    </div>
    <form class="todos-form" name="todos">
      <input type="text" placeholder="What's next?" name="todo" />
    </form>
    <ul class="todos-list"></ul>
  </div>
`;

let todos = [];

//selectors
const root = document.querySelector('.todos')
const list = root.querySelector('.todos-list');
const fragment = document.createDocumentFragment();
const form = document.forms.todos;
const input = form.elements.todo;

//functions
function renderTodos(todos) {
  let todoString = '';
  todos.forEach((todo, index) => {
    todoString += `
    <li data-id="${index}">
      <input type="checkbox"/>
      <span>${todo.label}</span>
      <button type="button"></button>
    </li>
    `
  });
  

  list.innerHTML = todoString;
}


function addTodo(event) {
  event.preventDefault();

  const label = input.value.trim();
  const complete = false;
  todos = [
    ...todos,
    {
      label,
      complete
    }
  ]
  renderTodos(todos);
  input.value = '';
}


//init
function init() {
  // Add Todo
  form.addEventListener('submit', addTodo)

}

init()