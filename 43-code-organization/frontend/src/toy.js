class Toy {

  constructor(toy){
    this.toy = toy

    this.cardDiv = document.createElement("div")
      this.cardDiv.classList.add("card")

    // this.cardDiv.innerHTML = `
    //   <h2>${toy.name}</h2>
    //   <img src=${toy.image} class="toy-avatar" />
    //   <p>${toy.likes} Likes </p>
    //   <button class="like-btn">Like <3</button>
    //   <button class="del-btn">Donate to Goodwill</button>
    // `

    this.nameH2 = document.createElement("h2")
      this.nameH2.innerText = toy.name
    this.imgTag = document.createElement("img")
      this.imgTag.src = toy.image
      this.imgTag.className = "toy-avatar"
    this.likesPTag = document.createElement("p")
      this.likesPTag.innerText =  `${toy.likes} Likes`
    this.likeButton = document.createElement("button")
      this.likeButton.className = "like-btn"
      this.likeButton.innerText = "Like <3"
    this.deleteButton = document.createElement("button")
      this.deleteButton.className = "del-btn"
      this.deleteButton.innerText = "Donate to Goodwill"

    this.cardDiv.append(this.nameH2, this.imgTag, this.likesPTag, this.likeButton, this.deleteButton)

    this.deleteButton.addEventListener("click", this.handleDelete)

    toyCollectionDiv.append(this.cardDiv)
  }


  handleDelete = (evt) => {
    deleteAToy(this.toy.id)
    .then((deletedToy) => {

      this.cardDiv.remove()

      let foundToybox = Toybox.all.find((jsToybox) => {
        return jsToybox.toybox.id === deletedToy.toybox_id
      })
      let allToysExceptTheDeletedOne = foundToybox.toybox.toys.filter((singleToy) => {
        return singleToy.id !== deletedToy.id
      })

      foundToybox.toybox.toys = allToysExceptTheDeletedOne
      debugger
    })
  }






























}
