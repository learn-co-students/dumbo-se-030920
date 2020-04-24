let addToy = false;

const addBtn = document.querySelector("#new-toy-btn");
const toyFormContainer = document.querySelector(".container");
const toyCollectionDiv = document.querySelector("#toy-collection")
const toyForm = document.querySelector(".add-toy-form")





fetch("http://localhost:3000/toys")
  .then(r => r.json())
  .then((toysArr) => {
    toysArr.forEach((singleToy) => {
      createHTMLForToy(singleToy)
    })
    // toysArr.forEach(createHTMLForToy)
  })





let createHTMLForToy = (toy) => {
  // toy {id: 9, name: toyName, image: toyImage, likes: 0}

  // 1) Create the outer box
  let toyCardDiv = document.createElement("div")
    toyCardDiv.classList.add("card")
    // toyCardDiv.className = "card"

  // 2) Fill the contents of that box
  toyCardDiv.innerHTML = `<h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes} Likes</p>
    <button class="like-btn">Like <3</button>`

  // let nameH2 = document.createElement("h2")
  //   nameH2.innerText = toy.name
  //
  // let imageTag = document.createElement("img")
  //   imageTag.src = toy.image
  //   imageTag.classList.add("toy-avatar")
  //
  // let likesPTag = document.createElement("p")
  //   likesPTag.innerText = `${toy.likes} Likes`
  //
  // let likeButton = document.createElement("button")
  //   likeButton.classList.add("like-btn")
  //   likeButton.innerText = "Like <3"
  //
  // toyCardDiv.append(nameH2, imageTag, likesPTag, likeButton)


  // 3) Append the box to the page
  toyCollectionDiv.append(toyCardDiv)


  // 4) Find the elements from the box
  let likeButton = toyCardDiv.querySelector(".like-btn")
  let likesPTag = toyCardDiv.querySelector("p")

  // 5) Add event listeners to the elements
  likeButton.addEventListener("click", () => {

    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1
        // likes: ++toy.likes
      })
    })
      .then(r => r.json())
      .then((updatedToy) => {
        // Update the JS {} in memory
        toy.likes = updatedToy.likes
        // Updates the DOM
        likesPTag.innerText = `${updatedToy.likes} Likes`
      })

  })

}





toyForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let toyName = evt.target.name.value
  let toyImage = evt.target.image.value

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImage,
      likes: 0,
    })
  })
    .then(r => r.json())
    .then((newlyCreatedToy) => {
      // newlyCreatedToy {id: 9, name: toyName, image: toyImage, likes: 0}
      createHTMLForToy(newlyCreatedToy)
      evt.target.reset()
      // addBtn.click()
    })


})








// document.addEventListener("DOMContentLoaded", () => {
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
// });
