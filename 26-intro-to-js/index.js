console.log("Javascript is cool")

// let && const are block-scoped {}
  // these variables are only accessible within the block they are defined

// var is function-scoped
  // these variables are accessible within the function they are defined


let arr = [1,2,3,4]

// function funcName(){}

function isItEven(firstArgument){
  // === compares data type
  // == coerces data type
  if (firstArgument.length % 2 === 0) {
    // let/var inside = "Inside"
    console.log("It is even")
  } else {
    console.log("It is odd")
  }
  // console.log(inside)
}



// isItEven(arr)
  // console log "It is even"

// isItEven()
  // firstArgument => undefined

// isItEven
  // function definition





// callbacks are function definitions passed into the invocation of another function
  // arguments of the callback are at determined by the function receiving it

let arrayOfWords = ["Cat", "Dogs", "Chicken"]
// arrayOfWords.forEach( isItEven )


arrayOfWords.forEach( function callbackFunc(firstArg){
  if (firstArg.length % 2 === 0) {
    // let/var inside = "Inside"
    console.log(`${firstArg} is even`)
  } else {
    console.log(`${firstArg} is odd`)
  }
} )
