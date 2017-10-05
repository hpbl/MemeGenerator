import React, { Component } from 'react';
import { createMeme } from '../actions';
import { connect } from 'react-redux';

class MemeItem extends Component {
  constructor() {
    super();

    this.state = {
      hovered: false
    }
  }

  postMeme() {
    const { text0, text1 } = this.props;
    const memeObj = {
      template_id: this.props.meme.id,
      text0,
      text1
    }
    console.log(memeObj);
    this.props.createMeme(memeObj);
  }

  render() {
    return (
      <div
        className='meme-item'
        onMouseLeave={() => this.setState({ hovered: false })}
        onMouseEnter={() => this.setState({ hovered: true })}
        onClick={() => this.postMeme()}
        >
        <img
          className={ this.state.hovered ? 'meme-img darken-img' : 'meme-img' }
          src={this.props.meme.url}
          alt={this.props.meme.name}
        />
        <p className={ this.state.hovered ? 'meme-txt' : 'no-txt' }>
          {this.props.meme.name}
        </p>
      </div>
    )
  }
}


export default connect(null, { createMeme })(MemeItem);
