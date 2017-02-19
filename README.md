Dynamo
=========

A tiny (really, just 26 lines of code) library for simple dynamic React state management, with no dependencies.  Dynamo eschews much of the boilerplate and overhead
involved in other libraries such as Redux and Flux, by focusing on simplicity and developer control of state.  You can get up and running with Dynamo in less than one
minute.  Seriously.  There are no reducers here, and no action creators.  Simply create a store as demonstrated below, and use the `Dynamo.set()` method to add to or
modify items in the store, and the `Dynamo.get()` method to retrieve items.  Super easy!  

Check out our simple tutorial at [this link](http://www.medsquared.com.au/blog/simpler-redux-alternative-dynamojs/)

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
    import Dynamo from './store';
    import App from './App';

    class Root extends React.Component {

      constructor() {
        super()
        Dynamo.connect(this)
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

    import Dynamo from './store'

    // Access store items

    var name = Dynamo.get().name;

    // Modify the store

    Dynamo.set({ age: 34});

  To use Dynamo in debug mode, which logs out the state to the console:

    Store.debugMode();

  You can also have as many stores as you want with Dynamo, so if for example you wanted to create a separate store for authentication and profile details, simply initialise a new store in a file called something like `authstore.js` and import and use it as described above.

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.  The source code for Dynamo is written in
ES6 (es6src.js) and will require transpiling to the ES5 source code in index.js.  You can use babel-cli or the Babel REPL to do this quickly.
