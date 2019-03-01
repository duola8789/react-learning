import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const arr = [123, 17, -7, 11, -2, 1, -34, 2, -21, 9, 12];
    const getMax = (arr, s = 0, e = arr.length - 1) => {
      if (s > e) {
        return 0
      } else if (s === e) {
        return arr[s]
      }

      const middle = Math.floor((s + e) / 2);

      let maxMiddleLeft = arr[middle];
      let tempL = 0;
      for (let i = middle; i >= s; i--) {
        tempL += arr[i];
        maxMiddleLeft = Math.max(tempL, maxMiddleLeft);
      }

      let maxMiddleRight = arr[middle + 1];
      let tempR = 0;
      for (let i = middle + 1; i <= e; i++) {
        tempR += arr[i];
        maxMiddleRight = Math.max(tempR, maxMiddleRight);
      }

      const maxMiddle = maxMiddleRight + maxMiddleLeft;

      let maxLeft = getMax(arr, s, middle);
      let maxRight = getMax(arr, middle + 1, e);

      return Math.max(maxLeft, maxRight, maxMiddle)
    };

    const symbol = Symbol('hello');
    console.log(symbol.description)

    console.log(getMax(arr))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
