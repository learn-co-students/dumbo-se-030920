# Steps

- `npm install redux`
- `npm install react-redux`
- In index.js, `import { createStore } from 'redux'`
- In index.js, `import { Provider } from 'react-redux'`

- `let reducer = (state, action) => {}`
- `let storeObj = createStore(reducer)`
- `ReactDOM.render(<Provider store={storeObj}><App/></Provider>, document.getElementById('root'))`

# Vocabulary

- Store: POJO that contains methods to interact with the global state
- Reducer: Javascript function whose return value becomes the new global state
- Action: POJO that contains information that will tell the reducer what to do
- Dispatch: Function that sends an action to the reducer, which will be executed

- Any React component that needs to get/set information from the global state (store) will need:
  `import {connect} from 'react-redux'`
- You use import in your export:
  `export default connect(mapStateToProps, mapDispatchToProps)(ComponentDefinedInTheFile)`
- mapStateToProps is a function definition telling Redux which information to send down from the global state
- mapDispatchToProps is a POJO full of function definitions that dispatches an action

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
