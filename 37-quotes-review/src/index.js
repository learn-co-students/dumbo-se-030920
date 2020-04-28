// ALL OF MY STABLE ELEMENTS GO AT THE TOP
let quotesUL = document.querySelector("#quote-list")
let newQuoteForm = document.querySelector("#new-quote-form")


// DELEGATION

// quotesUL.addEventListener("click", (evt) => {
//
//   if (evt.target.classList.contains("btn-danger")) {
//     // evt.target is always the deleteButton
//     let quoteLi = evt.target.parentNode.parentNode
//     let quote_id = quoteLi.dataset.chicken
//     fetch(`http://localhost:3000/quotes/${quote_id}`, {
//       method: "DELETE"
//     })
//       .then(r => r.json())
//       .then((emptyObj) => {
//         quoteLi.remove()
//       })
//   }
//
//   if(evt.target.tagName === "SPAN" || evt.target.classList.contains("btn-success")){
//     let quoteLi = evt.target.parentNode.parentNode
//     let quote_id = quoteLi.dataset.chicken
//
//     let likeSpan = quoteLi.querySelector("span")
//
//     fetch('http://localhost:3000/likes', {
//         method: "POST",
//         headers: {
//           'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//           quoteId: parseInt(quote_id)
//         })
//       })
//       .then(r => r.json())
//       .then((newlyCreatedLike) => {
//         likeSpan.innerText = parseInt(likeSpan.innerText) + 1
//       })
//   }
// })


newQuoteForm.addEventListener("submit", (evt) => {
  evt.preventDefault()

  let newAuthor = evt.target.author.value
  let newQuote = evt.target["new-quote"].value

  // renderQuote({author: newAuthor, quote: newQuote, likes: []})

  fetch("http://localhost:3000/quotes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      quote: newQuote,
      author: newAuthor
    })
  })
    .then(r => r.json())
    .then((newQuoteObj) => {
      newQuoteObj.likes = []
      renderQuote(newQuoteObj)
    })
})



fetch("http://localhost:3000/quotes?_embed=likes")
  .then(r => r.json())
  .then((quotesArr) => {

    quotesArr.forEach((quoteObj) => {
      renderQuote(quoteObj)
    })

  })


function renderQuote(quote){
  // {} => <div></div>
  // 1) Create the outermost element / Razzmatazz
  // 2) Fill the contents of the box
  // 3) Append the box to the page (stable element)
  // 4) From the box, pull out whatever elements you need
  // 5) Add the appropriate event listeners to the elements you pulled


  let quoteLi = document.createElement("li")
    quoteLi.classList.add("quote-card")
    quoteLi.dataset.chicken = quote.id

  quoteLi.innerHTML = `<blockquote class="blockquote">
      <p class="mb-0">${quote.quote}</p>
      <footer class="blockquote-footer">${quote.author}</footer>
      <br>
      <button class='btn-success'>Likes: <span>${quote.likes.length}</span></button>
      <button class='btn-danger'>Delete</button>
    </blockquote>`

  // If you want information from inside of the likes array, leave a blank template inside your box
    // Grab the blank template from inside the box, save it to a variable
    // Iterate over the likes array, appending the appropriate HTML to the variable you've saved

  quotesUL.append(quoteLi);

  let deleteButton = quoteLi.querySelector(".btn-danger")

  deleteButton.addEventListener("click", (evt) => {

    fetch(`http://localhost:3000/quotes/${quote.id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then((emptyObj) => {
        console.log(emptyObj);
        quoteLi.remove()
      })
      // .catch((err) => console.error(err))

  })
  // END OF DELETE EVT LISTENER

  let likeButton = quoteLi.querySelector(".btn-success")
  let likeSpan = quoteLi.querySelector("span")

  likeButton.addEventListener("click", (evt) => {

    fetch('http://localhost:3000/likes', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        quoteId: quote.id
      })
    })
    .then(r => r.json())
    .then((newlyCreatedLike) => {

      quote.likes.push(newlyCreatedLike)
      likeSpan.innerText = quote.likes.length

    })

  })
  // END OF LIKE EVT LISTENER
}
// END OF RENDERQUOTE
