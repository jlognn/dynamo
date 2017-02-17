Dynamo
=========

A tiny (really, just fifty lines of code) library for simple dynamic React state management

## Installation

  `npm install react-dynamo`

## Usage

  Create a store (store.js) and set your app's initial state:

    import Dynamo from 'react-dynamo';
    const initialState = {
      name: 'Joe',
      gender: 'Male'
    }
    export default Dynamo(initialState);

  You now have a store component which you can connect to your app using the `connect` method.  It is recommended to import this in your root component, usually index.js, and pass elements of the store to child components as props.

  Example: Creating a connected root component in React:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Store from './components/Store';
    import App from './App';

    class Root extends React.Component {

      constructor() {
        super()
        Store.connect(this)
      }

      render() {
        return <App store={this.state}/>
      }
    }

    ReactDOM.render(
      <Root />,
      document.getElementById('root')
    );

  We now have our main <App> component connected to the entire Dynamo store.  
  Within our app component, we can:

    import Store from './store'

    // Access store items

    var name = this.props.store.name;

    // Modify the store

    Store.dispatch({ age: 34});

    // Get the state (if not available through props)

    var currentState = Store.getState();


  To use Dynamo in debug mode, which logs out the state to the console:

    Store.debugMode();

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
