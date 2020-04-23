console.log("%c Hello! Please write some nice Javascript code here.", "color: lightseagreen")

// document.addEventListener("DOMContentLoaded", () => {
  // Inside of this callback, we are guaranteed that the page has loaded
    // Similar to using defer
// })


let todoList = document.querySelector(".ui.massive.list")
// let todoOl = document.getElementById('to-do-items')
let newTodoForm = document.getElementById('new-to-do')





// READING THE INDEX
fetch("http://localhost:3000/to_do_items")
  .then(r => r.json())
  .then((todoArray) => {

    todoArray.forEach((singleTodo) => {
      turnTodoToLi(singleTodo)
    })

  })





function turnTodoToLi(todo){
  // {title: "Make Fetch Happen", done: false, id: 1} => <li></li>

  // 1) Creating the outer box
  let todoLi = document.createElement("li")
    todoLi.className = "item"

  // 2) Fill the contents of that box
  todoLi.innerHTML = `<input id="to-do-item-${todo.id}" type="checkbox" ${ todo.done ? "checked" : ""} />
    <label for="to-do-item-${todo.id}" class="js-title middle aligned content">${todo.title}</label>
    <button>×</button>`

  // 3) Append the box to the page
  todoList.append(todoLi)

  // 4) Find the appropriate elements inside the box
  let deleteButton = todoLi.querySelector("button")

  // 5) Add the event listeners using closure
  deleteButton.addEventListener("click", (evt) => {
    console.log(todo.id);
  })

}





// CREATE A TODO

newTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let newTitle = evt.target.title.value

  fetch("http://localhost:3000/to_do_items", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      title: newTitle,
      done: false
    })
  })
    .then(r => r.json())
    .then((newlyCreatedTodo) => {
      turnTodoToLi(newlyCreatedTodo)
    })



})

























//
