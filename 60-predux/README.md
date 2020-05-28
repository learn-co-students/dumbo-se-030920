# Steps
- `npm install redux`
- In index.js, `import {createStore} from 'redux'`
- `let reducer = (state, action) => {}`
- `let storeObj = createStore(reducer)`

# Vocabulary
- Store: POJO that contains methods to interact with the global state
- Reducer: Javascript function whose return value becomes the new global state
- Action: POJO that contains information that will tell the reducer what to do
- Dispatch: Function that sends an action to the reducer, which will be executed

# Template

```Javascript

let initialState = {
  counter: 9,
  hello: "everyone"
}

let reducer = (state = initialState, action) => {

  switch (action.type) {

    default:
      return state
  }
}




```
