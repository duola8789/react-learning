/**
 * Created by zh on 2019/3/4.
 */
import { combineReducers } from 'redux'

import defaultImage from '../../assets/images/default.jpg'

const reducer1 = (state = 0, action) => {
  // console.log('reducer1 was called with state', state, 'and action', action);
  switch (action.type) {
    case 'INCREMENT': {
      return +state + 1
    }
    case 'DECREMENT': {
      return +state - 1
    }
    case 'CHANGE': {
      return +action.payload
    }
    default: {
      return +state
    }
  }
};

const reducer2 = (state = { test: 'go' }, action) => {
  if (action.type === 'SEND_QUESTION') {
    // console.log('reducer2 was called with state', state, 'and action', action);
  }
  return state
};

const reducer3 = function (state = { status: '', answer: { msg: '', image: defaultImage}}, action) {
  // console.log('reducer_3 was called with state', state, 'and action', action);
  switch (action.type) {
    case 'SAY_SOMETHING': {
      return {
        ...state,
        message: action.value
      };
    }
    case 'SEND_QUESTION' : {
      return {
        ...state,
        status: action.status,
        question: action.question,
      }
    }
    case 'RECEIVE_ANSWER' : {
      return {
        ...state,
        status: action.payload ? action.payload.status : action.status,
        answer: action.payload ? action.payload.answer : action.answer,
      }
    }
    default:
      return state;
  }
};


const reducer = combineReducers({
  val1: reducer1,
  val2: reducer2,
  val3: reducer3
});

export default reducer

/**
 * createStore的简单实现
 * @param reducer
 * @returns {{getState: (function(): *), dispatch: dispatch, subscribe: (function(*=): Function)}}
 const createStore = reducer => {
  let state = reducer(undefined, {});
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    reducer(state, action);
    listeners.forEach(fn => {
      fn()
    })
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => {
      listeners.filter(fn => fn !== listener)
    }
  };

  return {
    getState,
    dispatch,
    subscribe
  }
};
 */

/**
 * combineReducer的简单实现
 * @param reducers
 * @returns {Function}
 const combineReducer = reducers => (state = {}, action) => {
  Object.keys(reducers).reduce((newState, key) => {
    newState[key] = reducers[key](state[key], action);
    return newState
  }, {})
}
 */

