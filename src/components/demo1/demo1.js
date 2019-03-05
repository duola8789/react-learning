/**
 * Created by zh on 2019/3/1.
 */
import React, { Component } from 'react';

import { createStore } from "redux";
import reducer from "../../reducers/index";

// 引入Redux
const store = createStore(reducer);

const Count = ({ value, onIncrement, onDecrement, onChange }) => {
  return (
    <div>
      <button onClick={ onIncrement }>+</button>
      <span>Now, the count is { value }</span>
      <button onClick={ onDecrement }>-</button>
      <input type="number" onInput={ onChange } />
    </div>
  )
};

export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: store.getState().val1,
      val2: store.getState().val2,
      val3: store.getState().reducer3
    }
  }

  render() {
    const value = this.state.val1;
    const value2 = this.state.val2;

    const ACTIONS = {
      INCREMENT: 'INCREMENT',
      DECREMENT: 'DECREMENT',
      CHANGE: 'CHANGE'
    };

    store.subscribe(() => {
      this.setState({
        val1: store.getState().val1
      })
    });

    return (
      <Count value={ value }
             value2={ value2 }
             onIncrement={ () => store.dispatch({ type: ACTIONS.INCREMENT }) }
             onDecrement={ () => store.dispatch({ type: ACTIONS.DECREMENT }) }
             onChange={ (e) => store.dispatch({
               type: ACTIONS.CHANGE,
               payload: e.target.value
             }) } />
    )
  }
};


