/**
 * Created by zh on 2019/3/6.
 */
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";

// 使用thunk中间件，使dispatch可以接受函数作为参数（默认只能接受Action对象作为参数）
// import thunk from 'redux-thunk';

// 使用redux-promise中间件，使dispatch可以接受Promise作为参数
import promiseMiddleware from 'redux-promise'

// 自定义的log中间件
const logMiddleware = ({dispatch, getState}) => (next) => (action) => {
  console.log('logMiddleware action received: ', action);
  return next(action)
};

// 创建Store
const store = createStore(reducer, applyMiddleware(logMiddleware, promiseMiddleware));

export default store;
