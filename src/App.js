import React, { Component } from 'react';
import './App.css';
import withContext from './components/withContext';


class App extends Component {


  render() {
    let {message, closeSnackbar, openSnackbar} = this.props.context;
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={closeSnackbar}>
          {message}
        </button>
        <button onClick={openSnackbar}>
          status
        </button>
        </header>
      </div>
    );
  }
}

export default withContext(App);
