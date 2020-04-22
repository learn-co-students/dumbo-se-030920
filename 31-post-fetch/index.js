let foxButton = document.getElementById('hello-button')
let foxesUl = document.querySelector("#foxes")
let newFoxForm = document.querySelector("#fox-form")


// element.addEventListener("event_type", (evt) => {
  // GET SOME VARIABLES (PROBABLY WITH evt.target)

  // fetch("URL", {})
    // .then(r => r.json())
    // .then((theActualResponse) => {
      // Some DOM Manipulation with theActualResponse
    // })
// })



newFoxForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let foxName = evt.target["f_name"].value
  let foxImg = evt.target["fox_img"].value

  console.log(foxName, foxImg);
  fetch("http://localhost:3000/foxes", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
      "Accept": "Application/json"
    },
    body: JSON.stringify({
      name: foxName,
      img_url: foxImg,
      chicken: "bawk bawk"
    })
  })
    .then(r => r.json())
    .then((createdFox) => {
      turnFoxObjToHTML(createdFox);
    })

})






foxButton.addEventListener("click", (evt) => {
  
  fetch("http://localhost:3000/foxes/random")
    .then(r => r.json())
    .then((singularFox) => {
      turnFoxObjToHTML(singularFox)
    })
    // .then(turnFoxObjToHTML)

})





// {id: 1, name: "Ozzy", img_url: ""} => <li><img src="" /></li>

// const turnFoxObjToHTML = (foxObj) => {
// }

function turnFoxObjToHTML(foxObj){
  let blankLi = document.createElement("li")
  let blankImg = document.createElement("img")

  blankImg.src = foxObj.img_url
  blankImg.alt = foxObj.name

  blankLi.append(blankImg)
  foxesUl.append(blankLi)


  blankImg.addEventListener("click", () => {
    console.log(foxObj);
    console.log(foxObj.id);
    blankLi.remove()
  })

}
