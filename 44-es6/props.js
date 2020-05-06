// Is there a shorthand way to create properties in an object literal
// that have the the same names as variables I have in scope?

  const name = "Eric Kim"
  const age = 11
  const eating = ["junk", "garbage"]

  const eric = {
    name: name,
    age: age,
    eating: eating
  }

  console.log(eric);





// Is there a way to dynamically define (or compute) property names
// in an object literal e.g. based on the value of a variable?

  const whatIwantToDoMore = "dance";

  const newYearsResolution = {
    body: "Write code every day",
    dance: "more"
  }


console.log(newYearsResolution);
