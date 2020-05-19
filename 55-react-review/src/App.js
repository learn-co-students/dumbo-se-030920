import React from 'react';
import './App.css';
import PTag from './PTag'
import InputTag from './InputTag'
import WordsContainer from './WordsContainer'



class App extends React.Component {

  state={
    firstInput: "",
    secondInput: "",
    words: []
  }

  componentDidMount() {
    this.setState({
      words: [
        {word: "Jump", word_type: "Verb"},
        {word: "Chicken", word_type: "Noun"},
        {word: "Dog", word_type: "Noun"},
        {word: "Rarely", word_type: "Adverb"},
      ]
    })
  }

  handleFirstInput = (evt) => {
    this.setState({
      firstInput: evt.target.value
    })
  }

  handleSecondInput = (termFromChild) => {
    if (!termFromChild.includes("x") && termFromChild.length < 5) {
      this.setState({
        secondInput: termFromChild.toUpperCase()
      })

    }
  }


  decideWhichWordsToSendDown = () => {
    return this.state.words.filter((word) => {
      return word.word.toLowerCase().includes(this.state.firstInput.toLowerCase())
    })
  }

  render(){
    return (
      <div className="App">

        <h1>First</h1>
          <p>This is what is being typed: {this.state.firstInput}</p>
          <input type="text" value={this.state.firstInput} onChange={this.handleFirstInput}/>

        <hr/>

        <h1>Second</h1>
          <PTag
            secondInput={this.state.secondInput}
          />
          <InputTag
            handleSecondInput={this.handleSecondInput}
            secondInput={this.state.secondInput}
          />

        <hr/>

        <WordsContainer
          words={this.decideWhichWordsToSendDown()}
        />


      </div>
    );
  }

}

export default App;
