import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Demo1 from './views/demo1/index';
import Demo2 from './views/demo2/index';
import Demo3 from './views/demo3/index';
import Demo4 from './views/demo4/index';
import Demo5 from './views/demo5/index';
import Demo6 from './views/demo6/index';
import Demo7 from './views/demo7/index';
import Demo8_1 from './views/demo8_1/index';
import Demo8_2 from './views/demo8_2/index';
import Demo8_3 from './views/demo8_3/index';
import Demo8_4 from './views/demo8_4/index';
import Demo8_5 from './views/demo8_5/index';
import Demo8_6 from './views/demo8_6/index';
import Demo8_7 from './views/demo8_7/index';
import Demo8_8 from './views/demo8_8/index';
import Demo8_9 from './views/demo8_9/index';
import Demo13 from './views/demo13/index';
import Demo14 from './views/demo14/index';

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
            <Route path="/Demo8_1/" component={Demo8_1} />
            <Route path="/Demo8_2/" component={Demo8_2} />
            <Route path="/Demo8_3/" component={Demo8_3} />
            <Route path="/Demo8_4/" component={Demo8_4} />
            <Route path="/Demo8_5/" component={Demo8_5} />
            <Route path="/Demo8_6/" component={Demo8_6} />
            <Route path="/Demo8_7/" component={Demo8_7} />
            <Route path="/Demo8_8/" component={Demo8_8} />
            <Route path="/Demo8_9/" component={Demo8_9} />
            <Route path="/Demo13/" component={Demo13} />
            <Route path="/Demo14/" component={Demo14} />
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
