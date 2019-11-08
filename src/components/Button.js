import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const Button = () => {
    //this is how we hook up a context obj to a component (!It has to be called contextType)
    //what static does is add a property directly to the class itself.
    //this is identical to Button.contextType = LanguageContext;
    // static contextType =  LanguageContext;

    //when we are using a consumer, we do not have to specify a contextType
    //we always provide one child to consumer and this child will always be a function
    
    const renderSubmit = (value) => {
        return value === 'english' ? 'Submit' : 'Soumettre';
    }
    const renderButton = (color) => {
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    return (
        <ColorContext.Consumer>
            {(color) => renderButton(color)}
        </ColorContext.Consumer>
    );
    
}

export default Button;

//contextType links the component to the context object.
//To reference the info inside context obj, we're going to use this.context.

//Why we want to use Consumer over this.context:
//We can make use of Consumer anytime that we want to get information out of multiple different context objects
//inside a single component
//this.context can be used when you're trying to access a single context object inside a component