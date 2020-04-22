let foxButton = document.getElementById('hello-button')
let foxesUl = document.querySelector("#foxes")

foxButton.addEventListener("click", (evt) => {

  fetch("http://localhost:3000/foxes/random")
    .then(r => r.json())
    .then((foxObj) => {

      let blankLi = document.createElement("li")
      let blankImg = document.createElement("img")

      blankImg.src = foxObj.message
      blankImg.alt = foxObj.name

      blankLi.append(blankImg)
      foxesUl.append(blankLi)
      
    })

})
