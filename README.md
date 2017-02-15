Dynamo
=========

A tiny (really, just 36 lines of code un-minified) library for simple React state management

## Installation

  `npm install dynamo`

## Usage

  For your root element:

    
    import Dynamo from 'dynamo';

    Dynamo.subscribe( () => {
      this.setState(Dynamo.getState())
    })

  Then pass the state along to your other components as props. Easy!

  To modify the state:

    ```
    import Dynamo from 'dynamo';

    Dynamo.dispatch({ key: value});

    ```

  To obtain the state:

    ```
    Dynamo.getState();

    ```

  To use Dynamo in debug mode, which logs out the state to the console:

    ```
    Dynamo.debugMode();
    ```

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
