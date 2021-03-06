//The purpose of this file is to create a context obj and export it.
//The reason we are putting this into a separate file is that we can
//import the context object into only the files that we care about.
//In this app, we only want this obj in our App, Button, and Field.
//No other component needs to connect to the context.

import React, { Component } from 'react';
//This is all we have to do to create a context obj.
//we can create a default value by passing it directly into the createContext call.
//The default obj can be anything that's js (ex: obj, array).
// export default React.createContext('english');
const Context = React.createContext('english');

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({
      language
    });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
          {this.props.children}
      </Context.Provider>
    );
  }
}

// export const LanguageStore = (props) => {
//   const [ language, setLanguage ] = useState('english');
//   return (
//     <Context.Provider value={{language, onLanguageChange: () => setLanguage(language) }}>
//       {props.children}
//     </Context.Provider>
//   )
// }

export default Context;
