Dynamo
=========

A tiny (really, just fifty lines of code) library for simple dynamic React state management. The
ethos of Dynamo is that you create a simple store, pick items out of it dynamically and as-needed
through the `getState()` method, and change the store using the `dispatch()` method.

## Installation

  `npm install react-dynamo`

## Usage

  The first step in getting set up with Dynamo, is creating a global singleton Store Object
  and initialising it.  For example, we create a `store.js` file and use the following pattern:

    import Dynamo from 'react-dynamo';
    const initialState = {
      name: 'Joe',
      gender: 'Male'
    }
    export default Dynamo(initialState);

  You can then `connect` this store object to your root react component, using the `Dynamo.connect()`
  method.

  Example: Creating a connected root component in React:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import Store from './store';
    import App from './App';

    class Root extends React.Component {

      constructor() {
        super()
        Store.connect(this)
      }

      render() {
        return <App>;
      }
    }

    ReactDOM.render(
      <Root />,
      document.getElementById('root')
    );

  We now have our main <App> component and all of it's children connected to the entire Dynamo store.  Within our app component, we can:

    import Store from './store'

    // Access store items

    var name = Store.getState().name;

    // Modify the store

    Store.dispatch({ age: 34});

  To use Dynamo in debug mode, which logs out the state to the console:

    Store.debugMode();

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
