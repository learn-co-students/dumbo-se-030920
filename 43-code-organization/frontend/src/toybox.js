class Toybox{

  static all = []

  constructor(toybox) {
    // {} -> <button></button>
    this.toybox = toybox
    Toybox.all.push(this)

    // Create the outer box
    // Fill the contents
    // Slap on DOM
    // Event Listeners
    this.buttonTag = document.createElement("button")
      this.buttonTag.classList.add("toybox")
      this.buttonTag.innerText = this.toybox.name

    toyboxContainer.append(this.buttonTag)

    this.buttonTag.addEventListener("click", this.handleToyDisplay)

  }


  handleToyDisplay = (evt) => {
    // console.log(this.toybox.toys)
    toyCollectionDiv.innerHTML = ""
    
    this.toybox.toys.forEach((toy) => {
      new Toy(toy);
    })
  }





}
