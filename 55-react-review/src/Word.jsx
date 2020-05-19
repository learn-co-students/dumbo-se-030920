import React, { Component } from 'react';

class Word extends Component {

  render() {
    return (
      <li>
        {this.props.word.word} - {this.props.word.word_type}
      </li>
    );
  }

}

export default Word;
