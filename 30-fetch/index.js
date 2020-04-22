// fetch("", {})
  // .then(r => r.json())
  // .then((theActualThingIwantToWorkWith) => {
  // })

  // arrow functions that are single-lined without curlies have implicit returns




// fetch("https://pokeapi.co/api/v2/pokemon/1")
//   .then(r => r.json())
//   .then((information) => {
//     console.log(information);
//   })


let dogButton = document.getElementById('hello-button')
let dogsUl = document.querySelector("#dogs")



dogButton.addEventListener("click", (evt) => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
      // r is the response with headers and body and status code
    .then((imageObj) => {

      let blankLi = document.createElement("li")
      let blankImg = document.createElement("img")

      blankImg.src = imageObj.message
      blankImg.alt = "doggy"

      blankLi.append(blankImg)
      dogsUl.append(blankLi)

    })

})
