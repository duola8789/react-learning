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
            <li><Link to="/demo8_1">Demo8_1 -- Hooks API（1）计数器</Link></li>
            <li><Link to="/demo8_2">Demo8_2 -- Hooks API（2）好友上线使用多个Effect</Link></li>
            <li><Link to="/demo8_3">Demo8_3 -- Hooks API（3）好友上线使用自定义Effect</Link></li>
            <li><Link to="/demo8_4">Demo8_4 -- Hooks API（4）useEffect的学习</Link></li>
            <li><Link to="/demo8_5">Demo8_5 -- Hooks API（5）useEffect的快照</Link></li>
            <li><Link to="/demo8_6">Demo8_6 -- Hooks API（6）useRef</Link></li>
            <li><Link to="/demo8_7">Demo8_7 -- Hooks API（7）useReducer</Link></li>
            <li><Link to="/demo8_8">Demo8_8 -- Hooks API（8）useCallback</Link></li>
            <li><Link to="/demo8_9">Demo8_9 -- Hooks API（9）useContext</Link></li>
            <li><Link to="/demo13">Demo13 -- React 16</Link></li>
            <li><Link to="/demo14">Demo14 -- 组件间通信</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
