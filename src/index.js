import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Demo1 from './components/demo1'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class RouterContainer extends React.Component {
  render() {
    return  (
      <Router>
        <div className="container">
          <nav>
            <div className="head">
              <Link to="/" />
            </div>
          </nav>
          <Route exact path="/" component={App} />
          <Route path="/a/" component={Demo1} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<RouterContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
