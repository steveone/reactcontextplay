import React, { Component } from 'react';

export const  AppContext = React.createContext();

export default class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: 'closed',
      next: 'nothing',
    };
  }

  openNext = () => {
    const next = (this.state.next === 'nothing') ? 'next to' : 'nothing';
    this.setState({
      next,
    });
    alert(next);
  }

  openSnackbar = () => {
    const message = (this.state.isOpen===true) ? 'open' : 'closed';
    alert(message);
  };

  closeSnackbar = () => {
    const message = (this.state.isOpen===true) ? 'closed' : 'open'
    const isOpen = (this.state.isOpen===true) ? false : true

    this.setState({
      message,
      isOpen
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
          next: this.state.next,
          openNext: this.openNext,
        }}
      >
      {this.props.children}
      </AppContext.Provider>
    );
  }
}
