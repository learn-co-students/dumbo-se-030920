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
  // {title: "Make Fetch Happen", done: true, id: 1} => <li></li>


  // 1) Creating the outer box
  // 2) Fill the contents of that box
  let todoLi = formatAndReturnTheHTML(todo)


  // 3) Append the box to the page
  todoList.append(todoLi)

  // 4) Find the appropriate elements inside the box
  let deleteButton = todoLi.querySelector("button")
  let checkedInput = todoLi.querySelector("input")

  // 5) Add the event listeners using closure
  deleteButton.addEventListener("click", (evt) => {
    deleteHelper(todo, todoLi)
  })


  checkedInput.addEventListener("click", (evt) => {
    // console.log("THE ID IS:", todo.id);
    // console.log("THE NEW BOOLEAN WILL BECOME:" ,!todo.done);
    // console.log(todo);
    // console.log(evt.target);
    // console.log(evt.target.checked);
    updateHelper(todo, todoLi)
  })

}




function formatAndReturnTheHTML(todo){
  // 1) Creating the outer box
  let todoLi = document.createElement("li")
    todoLi.className = "item"

  if (todo.done) {
    todoLi.classList.add("done")
  }

  // 2) Fill the contents of that box
  todoLi.innerHTML = `<input id="to-do-item-${todo.id}" type="checkbox" ${ todo.done ? "checked" : ""} />
    <label for="to-do-item-${todo.id}" class="js-title middle aligned content">${todo.title}</label>
    <button>×</button>`

  return todoLi
}




// deleteHelper({}, <li></li>)
function deleteHelper(todo, todoLi){
  fetch(`http://localhost:3000/to_do_items/${todo.id}`, {
    method: "DELETE"
  })
    .then(r => r.json())
    .then((resp) => {
      todoLi.remove()
    })
}



function updateHelper(todo, todoLi){
  fetch(`http://localhost:3000/to_do_items/${todo.id}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({
      done: !todo.done
    })
  })
    .then(r => r.json())
    .then(updatedObj => {
      console.log(updatedObj);
      // {title: "Make Fetch Happen", done: true, id: 1}
      todo.done = updatedObj.done

      if (updatedObj.done === true) {
        todoLi.classList.add("done")
      } else {
        todoLi.classList.remove("done")
      }
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
