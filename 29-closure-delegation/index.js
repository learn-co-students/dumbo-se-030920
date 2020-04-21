// element.addEventListener("event_type", (evt) => {
    // GRAB SOME VARIABLES
    // FETCH TO THE BACKEND
    // MANIPULATE THE DOM
// })

// Adding an Event:
// 1) Find the element on the page
// 2) Add an event listener to that element
// 3) Give the element a set of instructions

let tacoButton = document.querySelector("#taco")
let emojisUL = document.querySelector("ul#blobs")
let newEmojiForm = document.querySelector("#emoji-form")



// ONLY NECESSARY BECAUSE WE HAVE SIX EMOJIS IN OUR HTML
let theOriginalSixEmojis = emojisUL.querySelectorAll("li")

theOriginalSixEmojis.forEach((emojiLi) => {
  emojiLi.addEventListener("click", (evt) => {
    emojiLi.remove()
  })
})
// ONLY NECESSARY BECAUSE WE HAVE SIX EMOJIS IN OUR HTML



// Click event
tacoButton.addEventListener("click", (evt) => {
  takeEmojiToLi("🌮")
})



// Form Submission
newEmojiForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let theFormWeAreWorkingWith = evt.target
  let theEmojiInput = theFormWeAreWorkingWith["new-emoji"]
  let theEmojiStr = theEmojiInput.value

  takeEmojiToLi(theEmojiStr)
  // evt.target.reset()
})



// CLOSURE
function takeEmojiToLi(emojiStr){
  // take in some JS data => change it to HTML stuff
    // {name: "🤔"} -> <li>🤔</li>
  let blankLi = document.createElement("li")
  blankLi.innerText = emojiStr
  emojisUL.append(blankLi)

  blankLi.addEventListener("click", () => {
    blankLi.remove()
  })
  // return blankLi
}



// DELEGATION
// Pro: 1) One event listener

// Cons: 1) If the information about the child is not available on the DOM, the parent can't really do much
// 2) You need to find a commonality between all of the children


// 1) Find a stable element on the HTML
// 2) Add an event listener
// 3) Add an if statement
// 4) Execute the bit of code

// emojisUL.addEventListener("click", (evt) => {
//   if (evt.target.tagName === "LI") {
//     // evt.target is an emojiLi
//
//     // let bool = window.confirm("Do you want to delete this?")
//     evt.target.remove()
//   }
// })
