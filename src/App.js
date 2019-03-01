import styles from './App.module.css';
import React, {Component} from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo"/>
          <ul className={styles.list}>
            <li><Link to="/demo1">Demo1 -- 拉拉队里看见方老师的框架</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
