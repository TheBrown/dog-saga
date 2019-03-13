import React, { Component } from 'react';
import logo from '../components/logo.svg';
import '../components/App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {

    const { fetching, dog, onRequestDog, error } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          {
            dog ? (
              <p>Keep Clicking for new dog</p>
            ) : (
                <p>Replace the React Icon with a dog</p>
              )
          }

          {
            fetching ? (
              <button disabled className="button is-primary is-loading">fetching...</button>
            ) : (
                <button onClick={onRequestDog} className="button is-primary"> Request a Dog</button>
              )
          }

          {error && <p style={{ color: 'red' }}> Fuck u</p>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: 'API_CALL_REQUEST' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
