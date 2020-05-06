// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

// Importance in Mod 4: 🔥🔥

const name = "Eric Kim"
const age = 11
const eating = ["junk", "garbage"]
const eric = { eating, age, name }
// console.log(eric);


// const username = evt.target.username.value
// const password = evt.target.password.value
// let obj = {username, password}
// body: JSON.stringify(obj)







// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

// Importance in Mod 4: 🔥🔥🔥

  const whatIwantToDoMore = "walk";

  const newYearsResolution = {
    body: "Write code every day",
    [whatIwantToDoMore]: "more"
  }

newYearsResolution[whatIwantToDoMore] // => "more"
newYearsResolution.whatIwantToDoMore // => undefined

console.log(newYearsResolution);
