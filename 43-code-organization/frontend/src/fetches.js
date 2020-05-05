// function getAllToys(){
//   return fetch("http://localhost:3000/toyboxes")
//     .then(r => r.json())
// }


// Adapter Pattern

const API_URL = "http://localhost:3000"

let getAllToyBoxes = () => {
  // This function returns a Promise
  let thePromiseObj = fetch(API_URL + "/toyboxes").then(r => r.json())
  return thePromiseObj
}

let deleteAToy = (id) => {
  return fetch(API_URL + `/toys/${id}`, {
    method: "DELETE"
  })
    .then(r => r.json())
}
