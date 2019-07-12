import styles from './App.module.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <ul className={styles.list}>
            <li><Link to="/demo1">Demo1 -- Redux基本概念</Link></li>
            <li><Link to="/demo2">Demo2 -- Redux中间件和异步操作</Link></li>
            <li><Link to="/demo3">Demo3 -- 使用React-Redux</Link></li>
            <li><Link to="/demo4">Demo4 -- HOC的基本使用(1) 获取数据和刷新</Link></li>
            <li><Link to="/demo5">Demo5 -- HOC的基本使用(2) 显示鼠标位置</Link></li>
            <li><Link to="/demo6">Demo6 -- Render Props(1) 显示鼠标位置</Link></li>
            <li><Link to="/demo7">Demo7 -- Context API</Link></li>
            <li><Link to="/demo8">Demo8 -- Hooks API（1）计数器</Link></li>
            <li><Link to="/demo9_1">Demo9_1 -- Hooks API（2-1）好友上线使用多个Effect</Link></li>
            <li><Link to="/demo9_2">Demo9_2 -- Hooks API（2-2）好友上线使用自定义Effect</Link></li>
            <li><Link to="/demo10_1">Demo10_1 -- Hooks API（3-1）useEffect的学习</Link></li>
            <li><Link to="/demo10_2">Demo10_2 -- Hooks API（3-2）useEffect的快照</Link></li>
            <li><Link to="/demo10_3">Demo10_3 -- Hooks API（3-3）useRef</Link></li>
            <li><Link to="/demo11">Demo11 -- Hooks API（4）useReducer</Link></li>
            <li><Link to="/demo12">Demo12 -- Hooks API（5）useCallback</Link></li>
            <li><Link to="/demo13">Demo13</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
