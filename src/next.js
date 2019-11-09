import React, { Component } from 'react';
import './App.css';
import withContext from './components/withContext';


class Next extends Component {


  render() {
    let {next, openNext} = this.props.context;
    return (
    <div>
        <button onClick={openNext}>
          {next}
        </button>
      </div>
    );
  }
}

export default withContext(Next);
