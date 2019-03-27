import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Demo1 from './components/demo1/index';
import Demo2 from './components/demo2/index';
import Demo3 from './components/demo3/index';
import Demo4 from './components/demo4/index';
import Demo5 from './components/demo5/index';
import Demo6 from './components/demo6/index';
import Demo7 from './components/demo7/index';
import Demo8 from './components/demo8/index';
import Demo9_1 from './components/demo9_1/index';
import Demo9_2 from './components/demo9_2/index';
import Demo10_1 from './components/demo10_1/index';
import Demo10_2 from './components/demo10_2/index';
import Demo10_3 from './components/demo10_3/index';
import Demo11 from './components/demo11/index';
import Demo12 from './components/demo12/index';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const NoMatch = () => (<div><h1>Sorry, 404</h1></div>);

// 路由设置
export default class RouterContainer extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <div className="head">
              <Link to="/" />
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/demo1/" component={Demo1} />
            <Route path="/demo2/" component={Demo2} />
            <Route path="/demo3/" component={Demo3} />
            <Route path="/Demo4/" component={Demo4} />
            <Route path="/Demo5/" component={Demo5} />
            <Route path="/Demo6/" component={Demo6} />
            <Route path="/Demo7/" component={Demo7} />
            <Route path="/Demo8/" component={Demo8} />
            <Route path="/Demo9_1/" component={Demo9_1} />
            <Route path="/Demo9_2/" component={Demo9_2} />
            <Route path="/Demo10_1/" component={Demo10_1} />
            <Route path="/Demo10_2/" component={Demo10_2} />
            <Route path="/Demo10_3/" component={Demo10_3} />
            <Route path="/Demo11/" component={Demo11} />
            <Route path="/Demo12/" component={Demo12} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<RouterContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
