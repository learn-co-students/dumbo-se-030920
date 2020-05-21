import React from 'react';
import './App.css';
import NotFound from './NotFound'
import Home from './Home'
import Header from './Header'
import Character from './CharacterComponents/Character'
import { Cat, Horton, Lorax, Thing1, Thing2 } from './CharacterComponents';


import {Route, Switch, Link, NavLink} from 'react-router-dom'
// Switch only shows one Route component from the many Routes inside of it
// Route components (needs to be rendered to the ReactDOM) and when the URL matches the `path`, the component shows up in its place

class App extends React.Component {

  state = {
    characters: [
      {
        id: 1,
        name: "The Cat in the Hat",
        gif: "https://media2.giphy.com/media/YrJ9irppjno2c/giphy.gif",
        slug: "cat",
      },
      {
        id: 2,
        name: "Horton",
        gif: "https://media0.giphy.com/media/DkVadqL1Sl5vi/giphy.gif",
        slug: "horton",
      },
      {
        id: 3,
        name: "The Lorax",
        gif: "https://media.giphy.com/media/RlE7socaGwjm/giphy.gif",
        slug: "lorax"
      },
      {
        id: 5,
        name: "Thing2",
        gif: "https://media1.tenor.com/images/e8583b865f497dbfdb3d1a35b22685c7/tenor.gif",
        slug: "thing2",
      },
   ]
  }


  decideWhichCharactersToRender = (routerProps) => {
    let theThingThatTheUserTypedInTheURL = routerProps.match.params.slug

    let foundCharacter = this.state.characters.find((character) => {
      return character.slug === theThingThatTheUserTypedInTheURL
    })

    if (foundCharacter) {
      return <Character name={foundCharacter.name} gif={foundCharacter.gif} />
    } else {
      return <NotFound />
    }
  }



  render() {
    let arrayOfComponents = this.state.characters.map((character) => {
      return (
        <li key={character.id}>
          <NavLink to={`/characters/${character.slug}`}>
            {character.name}
          </NavLink>
        </li>
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <Header/>

            <aside className="sidebar">
              <ul>
                <li>
                  <NavLink to="/" exact >Home</NavLink>
                </li>
                {
                  arrayOfComponents
                }
              </ul>
            </aside>
        </header>

        <main>


          <Switch>
            <Route path="/characters/:slug" render={this.decideWhichCharactersToRender} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>

        </main>

      </div>
    );
  }
}


// WAY 1 TO RENDER A COMPONENT

// <Route exact strict path="/cat" component={Cat} />



// WAY 2 TO RENDER A COMPONENT

// <Route path="/horton" >
//   <Horton/>
// </Route>



// WAY 3 TO RENDER A COMPONENT
// <Route path="/lorax" render={() => {}} />



// <Route path="/lorax" component={Lorax} />
// <Route path="/thing1" component={Thing1} />
// <Route path="/thing2" component={Thing2} />



// state={
//   stuff: [
//     {
//       id: 1,
//       name: "Pants",
//       clothes: [{}]
//     },
//     {
//       id: 2,
//       name: "Tops",
//       clothes: [{}]
//     }
//   ]
// }


























//
export default App
