class Person {

  washHands(){
    console.log("Starting to wash hands");
    setTimeout(() => {
      console.log("Washed my hands");
    }, 20000)

    return "I am clean"
  }

}





class Instructor extends Person {

  constructor(name_arg, fullName_arg){
    // `this` inside the constructor is the instance being created
    super()
    this.name = name_arg
    this.fullName = fullName_arg
    // Instructor.all.push(this)

  }

  // instance methods
  introduce(){
    // `this` inside an instance method is the instance (?)
    return `Hi, I am ${this.name}`
  }



  // NICE TO KNOW, BUT NOT SUPER NECESSARY FOR MOD 4

  // class variables
  static all = []

  // class methods
  static meet(){
    console.log("The instructors are off the floor for a meeting.")
  }

  washHands(){
    let returnValue = super.washHands()
    console.log(returnValue + "!!!!!!!");
  }

}





let ericInstructor = new Instructor("Eric", "Eric Kim")
let gracieInstructor = new Instructor("Gracie", "Gracie McGuire")
let sylwiaInstructor = new Instructor("Sylwia", "Sylwia Vargas")





function globalIntroduction(){
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
  introduce: globalIntroduction
}



// Function Definition
// console.log(eric.introduce)

// Function Invocation
// console.log(eric.introduce())

// console.log(eric.introduce() === gracie.introduce())


// Non-primitives in JS (Objects) will be passed by reference
// console.log("DEFINITION: ", eric.introduce === gracie.introduce)





//
