getAllToyBoxes()
  .then((toyboxes) => {
    toyboxes.forEach((toyboxObj) => {
      new Toybox(toyboxObj)
    })
  })


addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
  } else {
    toyFormContainer.style.display = 'none'
  }
})
