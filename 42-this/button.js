let mainDiv = document.querySelector("#main-div")





class JSButton{
// {} -> <html/>

  constructor(color_argument){
    // this -> instance being created
    this.color = color_argument

    this.buttonTag = document.createElement("button")
      this.buttonTag.innerText = `Color: ${this.color}`
      this.buttonTag.style.backgroundColor = this.color

    mainDiv.append(this.buttonTag)


    // Use arrow functions (good)
    this.buttonTag.addEventListener("click", this.handleClick)

    // or use bind (room for improvement)
    // this.buttonTag.addEventListener("click", this.handleClick.bind(this))

    // React:
    // <button onClick={this.handleClick}>Color: {this.color}</button>
  }


  handleClick = (evt) => {
    // handleClick is defined as an instance method
      // it would be great if this was the instance

    // as arrow function, this -> JSButton ✔
    // as baseless function, this -> evt.currentTarget 🙅‍♂️

    document.body.style.backgroundColor = this.color
  }




}



let cyanButton = new JSButton("Cyan")
let redButton = new JSButton("Red")
