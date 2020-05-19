import React, { Component } from 'react';
import Word from './Word'

class WordsContainer extends Component {

  state={
    theCheckedThing: "All"
  }

  handleTheCheckedThing = (evt) => {
    this.setState({
      theCheckedThing: evt.target.value
    })
  }

  decideTheWordsToRender = () => {
    return this.props.words.filter((word) => {
      return word.word_type === this.state.theCheckedThing
    })
  }



  render() {
    let filteredWords = this.props.words

    if (this.state.theCheckedThing !== "All") {
      filteredWords = this.decideTheWordsToRender()
    }
    console.log(filteredWords);


    return (
      <ul>
        <input type="radio" value="Noun" id="noun" checked={this.state.theCheckedThing === "Noun"} onChange={this.handleTheCheckedThing}/>
          <label htmlFor="noun">Noun</label>

        <input type="radio" value="Adverb" id="adverb" checked={this.state.theCheckedThing === "Adverb"} onChange={this.handleTheCheckedThing}/>
          <label htmlFor="adverb">Adverb</label>

        <input type="radio" value="Verb" id="verb" checked={this.state.theCheckedThing === "Verb"} onChange={this.handleTheCheckedThing}/>
          <label htmlFor="verb">Verb</label>

        <input type="radio" value="All" id="all" checked={this.state.theCheckedThing === "All"} onChange={this.handleTheCheckedThing}/>
          <label htmlFor="all">All</label>


        {filteredWords.map((word) => {
          return <Word key={word.word} word={word} />
        })}

      </ul>
    );
  }

}

export default WordsContainer;
