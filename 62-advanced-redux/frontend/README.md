# Steps

- `npm install redux`
- `npm install react-redux`
- In index.js, `import { createStore } from 'redux'`
- In index.js, `import { Provider } from 'react-redux'`

- `let reducer1 = (state, action) => {}`
- `let storeObj = createStore(reducer)`
- `ReactDOM.render(<Provider store={storeObj}><App/></Provider>, document.getElementById('root'))`


```Javascript
  `import { createStore, combineReducers } from 'redux'`
  `import { Provider } from 'react-redux'`


  let initialState1 = {}
  let reducer1 = (state = initialState1, action) => {
    switch (expression) {
      default:
        return state
    }
  }

  let initialState2 = {}
  let reducer2 = (state = initialState2, action) => {
    switch (expression) {
      default:
        return state
    }
  }

  let rootReducer = combineReducers({
    key1: reducer1,
    key2: reducer2
  })


  let storeObj = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  ReactDOM.render(
    <Provider store={storeObj}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  )

```

# Fullstack Application

1. Redux is set up
2. A React Component needs to be connected to the redux store
3. An event will probably occur
4. Fetch
5. Routes -> Controller -> Model/Serializer
6. An action gets dispatched (mapDispatchToProps && actionCreators)
7. The reducer needs to know what to do with the dispatched action (return value of reducer becomes global state)
8. Any React component connected to that bit of state will be updated (mapStateToProps)


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

}

let reducer = (state = initialState, action) => {

  switch (action.type) {

    default:
      return state
  }
}




```
