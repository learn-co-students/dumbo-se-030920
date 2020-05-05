let addToy = false
const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
let toyCollectionDiv = document.getElementById('toy-collection')
let toyForm = document.querySelector(".add-toy-form")


addBtn.addEventListener('click', () => {
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
  } else {
    toyFormContainer.style.display = 'none'
  }
})
