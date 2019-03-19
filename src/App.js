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
            <li><Link to="/demo1">Demo1 -- Redux基本概念</Link></li>
            <li><Link to="/demo2">Demo2 -- Redux中间件和异步操作</Link></li>
            <li><Link to="/demo3">Demo3 -- 使用React-Redux</Link></li>
            <li><Link to="/demo4">Demo4 -- HOC的基本使用(1) 获取数据和刷新</Link></li>
            <li><Link to="/demo5">Demo5 -- HOC的基本使用(2) 显示鼠标位置</Link></li>
            <li><Link to="/demo6">Demo6 -- Render Props(1) 显示鼠标位置</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
