/**
 * Created By zh on 2019-03-19
 */
import React, { Component } from 'react';
import { showMousePosHoc } from '../HOC/index'

const Base = ({ pos }) => {
  const { x, y } = pos;
  return (
    <div>
      <h1>The position of mouse is ({x}, {y})</h1>
    </div>
  )
};

const AppWithMouse = showMousePosHoc(Base);

export default class Demo5 extends Component {
  render() {
    return (
      <AppWithMouse />
    )
  }
}
