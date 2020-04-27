let sidebarUl = document.getElementById('shoe-list')
// console.log(sidebarUl);
let shoeImg = document.getElementById('shoe-image')
let shoeNameH4 = document.getElementById('shoe-name')
let shoeDescriptionPTag = document.getElementById('shoe-description')
let shoePrice = document.getElementById('shoe-price')
let reviewsList = document.getElementById('reviews-list')
let formContainerDiv = document.querySelector("#form-container")


fetch("http://localhost:3000/shoes")
  .then(r => r.json())
  .then((shoesArray) => {
    // shoesArray => [ {}, {}, {} ]
    shoesArray.forEach((shoeObj) => {
      // console.log(shoeObj);
      turnShoetoLi(shoeObj)
    })
    renderMainShoe(shoesArray[0])
  })




function turnShoetoLi(shoe){
  // {} => <li></li>
  let shoeLi = document.createElement("li")
    shoeLi.classList.add("list-group-item")
    shoeLi.innerText = shoe.name

  sidebarUl.append(shoeLi)

  shoeLi.addEventListener("click", (evt) => {
    // console.log(shoe.id)
    renderMainShoe(shoe)
  })
}



function renderMainShoe(shoe){
  // console.log(shoe)
  // shoe => {id: 0, name: ""}


  // DETAILS ARE BEING RENDERED BELOW
  shoeImg.src = shoe.image
  shoeNameH4.innerText = shoe.name
  shoeDescriptionPTag.innerText = shoe.description
  shoePrice.innerText = shoe.price

  // console.log(shoe.reviews);
    // shoe.reviews => [{id: 0, content: ""}, {id: 0, content: ""}]



  // REVIEWS ARE BEING RENDERED BELOW
  reviewsList.innerHTML = ""
  // while(reviewsList.firstChild){
  //   reviewsList.firstChild.remove()
  // }

  shoe.reviews.forEach((singleReview) => {
    let reviewLi = document.createElement("li")
      reviewLi.innerText = singleReview.content
      reviewLi.classList.add("list-group-item")
    reviewsList.append(reviewLi)
  })


  // FORM IS BEING RENDERED BELOW
  formContainerDiv.innerHTML = ""
  let newReviewForm = document.createElement("form")
    newReviewForm.id = "new-review"

  newReviewForm.innerHTML = `<div class="form-group">
      <textarea class="form-control" id="review-content" rows="3"></textarea>
      <input type="submit" class="btn btn-primary"></input>
    </div>`

  formContainerDiv.append(newReviewForm)

  newReviewForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    // console.log(shoe.id);
    let newReview = evt.target["review-content"].value
    // console.log(newReview);

    fetch(`http://localhost:3000/shoes/${shoe.id}/reviews`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        content: newReview
      })
    })
      .then(r => r.json())
      .then(reviewObj => {

        shoe.reviews.push(reviewObj)
        //toy.likes = updatedToy.likes

        let reviewLi = document.createElement("li")
          reviewLi.innerText = reviewObj.content
          reviewLi.classList.add("list-group-item")
        reviewsList.append(reviewLi)
      })

  })





}






























//
