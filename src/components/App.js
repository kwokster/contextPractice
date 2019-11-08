import React, {useState} from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  // state = { language: 'english'};
  const [language, setLanguage] = useState('english');

  // const preRenderFunc = (() => {
  //   console.log('hello');
  // })();

  return (
    <div className="ui container">
      {/* {console.log('inside render')} */}
      <div>
        Select a language:
        <i className="flag us" onClick={() => setLanguage('english')} />
        <i className="flag fr" onClick={() => setLanguage('french')} />
      </div>
      {/* Must be called value */}
      {/* No difference how you wrap the providers as long as they wrap the UserCreate component */}
      <ColorContext.Provider value="primary">
        <LanguageContext.Provider value={language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>
    </div>
  );
}


export default App;

//Context object (it's like a pipeline)
//2 ways to get information into Context object (source of data):
//default value
//Parent component (Provider)
//2 ways to get information out thing that uses data:
//this.context
//Consumer

//How it works:
//App loads up in the browser
//We create a context obj with a default value of 'english'
//************This happens everytime state changes */
//App gets rendered, creates a Provider that wraps UserCreate
//Provider updates the value of the context object to 'this.state.language'
//Button and Field reach into context obj, see the val from 'this.state.language'
//Button and Field render appropriate text to the screen
//************This happens everytime state changes */

//Big Gotcha:
//Each separate use of LanguageContext.Provider creates a new, separate pipe of information!