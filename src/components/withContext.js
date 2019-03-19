import React from 'react';
import { AppContext } from './Provider';


export default function withContext(Component) {
  return function contextComponent(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} /> }
      </AppContext.Consumer>
    )
  }
}
