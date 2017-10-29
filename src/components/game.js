import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

import * as actions from '../actions';

export class Game extends React.Component {
  render() {
    return (
      <div>
        <Header onNewGame={() => this.props.dispatch(actions.newGame())} />
        <GuessSection
          feedback={this.props.feedback}
          onGuess={guess => this.props.dispatch(actions.guess(guess))}
        />
        <GuessCount count={this.props.guesses.length} />
        <GuessList guesses={this.props.guesses} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: state.guesses
});

export default connect(mapStateToProps)(Game);
