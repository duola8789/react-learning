/**
 * Created by zh on 2019/3/1.
 */
import React, { Component } from 'react';


export default class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 123
    }
  }

  render() {
    return (
      <div>
        {this.state.number}
      </div>
    )
  }
};
