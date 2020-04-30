let addToy = false
const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
let toyCollectionDiv = document.getElementById('toy-collection')
let toyForm = document.querySelector(".add-toy-form")


fetch("http://localhost:3000/toys")
.then(res => res.json())
.then((allToys) => {
  console.log(allToys);
  allToys.forEach(render)
})

function render(toy){
  let outerDiv = document.createElement("div")
    outerDiv.className = "card"
  let nameH2 = document.createElement("h2")
    nameH2.innerText = toy.name
  let toyImg  = document.createElement("img")
    toyImg.src = toy.image
    toyImg.alt = toy.name
    toyImg.className = "toy-avatar"
  let likesP = document.createElement("p")
    let likeSpan = document.createElement("span")
      likeSpan.innerText = toy.likes
    likesP.append(likeSpan, " likes")
  let likeButton = document.createElement("button")
    likeButton.className = "like-btn"
    likeButton.innerText = "Like <3"
  let deleteButton = document.createElement("button")
    deleteButton.className = "delete-button"
    deleteButton.innerText = "Donate to Goodwill"

  outerDiv.append(nameH2, toyImg, likesP, likeButton, deleteButton)

  toyCollectionDiv.append(outerDiv)

  likeButton.addEventListener("click", (e) => {
    handleLike(toy, likeSpan)
  })

  deleteButton.addEventListener("click", (e) => {
    handleDelete(toy, outerDiv)
  })

}





function handleLike(toy, likeSpan){
  let newLike = toy.likes + 1
  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/json",
      "Accept": "Application/json"
    },
    body: JSON.stringify({
      likes: newLike
    })
  })
  .then(r => r.json())
  .then(updatedToy => {
    toy.likes = updatedToy.likes
    likeSpan.innerText = toy.likes
  })
}





function handleDelete(toy, div){
  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: "DELETE"
  })
  .then(r => r.json())
  .then((theThingIGetBack) => {
    console.log(theThingIGetBack);
    div.remove()
  })
}





addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
  } else {
    toyFormContainer.style.display = 'none'
  }
})





toyForm.addEventListener("submit", (event) => {
  event.preventDefault()
  let form = event.target
  let name = form.name.value
  let image = form.image.value

  fetch(`http://localhost:3000/toys`, {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      image: image,
      likes: 0
    }),
    headers:{
      'Content-Type': 'application/json',
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      if (response.id) {
        render(response)
      } else {
        console.log(response);
       }
      event.target.reset()


















    })
})
