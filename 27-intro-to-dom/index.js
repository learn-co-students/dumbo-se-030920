console.log("Javascript is still cool");


// READ::

// querySelector takes in a CSS Selector
  // https://www.w3schools.com/cssref/css_selectors.asp

let emojisUL = document.querySelector("ul")
// let allTheEmojis = document.querySelectorAll("li")
// let anotherWayToGrabEmojisUL = document.getElementById('blobs')

console.log(emojisUL);






// CREATE::

// 1) Get a blank sheet of paper
let blankLi = document.createElement("li")

// 2) Razzmatazz
blankLi.id = "taco"
blankLi.className = "created"

blankLi.innerText = "🌮"

// 3) Slap it on the DOM
  // 3.1) Find an appropriate place on the DOM
  // 3.2) appropriatePlace.append(theElement)

emojisUL.append(blankLi)
// emojisUL.appendChild(blankLi)


// DON'T DO THIS PLEASE

// emojisUL.innerHTML += "<li>🍕</li>"







// UPDATE::
  // 1) Find the element you want to update

let h1Tag = document.querySelector("h1")

  // 2) Razzmatazz
h1Tag.innerText = "Here is a nice list, grandma."
h1Tag.id = "heading"
h1Tag.classList.add("chicken")







// DELETE::

  // 1) Find the element on the DOM
let hankEmoji = emojisUL.querySelector(".bad")
  // 2) Destroy
hankEmoji.remove()


let allTheBadEmojis = emojisUL.querySelectorAll(".bad")
// NodeList => Yes .forEach
  // NOT Live (The length of this NodeList is determined at the time of creation)
console.log(allTheBadEmojis);

allTheBadEmojis.forEach( function(badLi){
  badLi.remove()
} )



let htmlCollectionBad = document.getElementsByClassName('bad')
// HTMLCollection => No .forEach
  // Live (The length of this HTMLCollection is reflective of what we have on the DOM)
console.log(htmlCollectionBad);
