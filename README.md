Dynamo
=========

A tiny (really, just 54 lines of code un-minified and pre-transpiled) library for simple React state management

## Installation

  `npm install react-dynamo`

## Usage

  For your root element:


    import Dynamo from 'react-dynamo';

    Dynamo.subscribe( () => {
      this.setState(Dynamo.getState())
    })

  Then pass the state along to your other components as props. Easy!

  To modify the state:

    import Dynamo from 'react-dynamo';
    Dynamo.dispatch({ key: value});


  To obtain the state:

    Dynamo.getState();

  To use Dynamo in debug mode, which logs out the state to the console:

    Dynamo.debugMode();

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
