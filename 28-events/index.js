console.log("Hello");
// Write in my stable elements (written in my index.html)
// button
// form
// emojisUL

// Adding an Event:
// 1) Find the element on the page
// 2) Add an event listener to that element
// 3) Give the element a set of instructions

// element.addEventListener("event_type", function(evt){
  // What do we do when the event occurs on the element
// })

// element.addEventListener("event_type", (evt) => {
  // What do we do when the event occurs on the element
// })


// evt.target answers the question of which element is receiving the event
let tacoButton = document.querySelector("#taco")
let emojisUL = document.querySelector("ul#blobs")
let newEmojiForm = document.querySelector("#emoji-form")





tacoButton.addEventListener("click", (evt) => {
  let blankLi = document.createElement("li")
  blankLi.innerText = "🌮"
  emojisUL.append(blankLi)
})





newEmojiForm.addEventListener("submit", (evt) => {
  // whenever we're submitting a form, prevent the default behavior of a form
    // We want the page to stop refreshing
  evt.preventDefault()
  // evt.target => the Form
  let theFormWeAreWorkingWith = evt.target
  let theEmojiInput = theFormWeAreWorkingWith["new-emoji"]
  let theEmojiStr = theEmojiInput.value

  // let theEmojiStr = evt.target["new-emoji"].value

  let blankLi = document.createElement("li")
  blankLi.innerText = theEmojiStr
  emojisUL.append(blankLi)

  // reset clears the inputs of a form
  evt.target.reset()
})
