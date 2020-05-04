// regular baseless functions (functions defined with the keyword function) get their value of `this` from their execution context
  // who calls the function?

// arrow functions get their value of `this` from where they are defined

// bind is a method that you can invoke on a function definition that returns a function definition, with the value of `this` changed
// call is a method you can invoke on a function definition that invokes the function definition, with the value of `this` changed
  // more than 2 arguments
// apply is a method you can invoke on a function definition that invokes the function definition, with the value of `this` changed
  // second argument must be an array

function globalIntroduction(){
  console.log(this);
  return `Hello, I am ${this.name}`
}

const gracie = {
  fullName: "Gracie McGuire",
  name: "Gracie",
  introduce: globalIntroduction
}

const sylwia = {
  fullName: "Sylwia Vargas",
  name: "Sylwia",
  introduce: globalIntroduction
}

const eric = {
  legalName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction.bind(sylwia)
}



// snippet 1
console.log(eric.introduce())
// this -> eric

// snippet 2
let functionName = eric.introduce
functionName()
// this -> window
























// WHAT IS THE VALUE OF THIS?

function whatIsThis(){
  console.log(this)
}

document.querySelector("h1").addEventListener("click", function(evt){
  // console.log(this)

  // this -> <h1>Tag</h1>
  // this -> evt.currentTarget (Who is the recipient of the event listener)
})

































let arr = [1, 4, 3, 4]
arr.forEach(function(element, index, originalArray) {
  // console.log(this)
  // this -> window
})

// forEach =>
// for (var i = 0; i < arr.length; i++) {
//   callback(arr[i])
// }



















fetch("https://dog.ceo/api/breeds/image/random")
.then(function(res){
  // console.log(this);
  // this -> window
})





















//
