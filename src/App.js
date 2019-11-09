import React, { Component } from 'react';
import './App.css';
import withContext from './components/withContext';
import Next from './next';


class App extends Component {


  render() {
    let {message, closeSnackbar, openSnackbar, next} = this.props.context;
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={closeSnackbar}>
          {message}
        </button>
        Next is : {next}
        <button onClick={openSnackbar}>
          status
        </button>
        <Next/>
        </header>
      </div>
    );
  }
}

export default withContext(App);
