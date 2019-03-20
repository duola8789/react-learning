/**
 * Created By zh on 2019-03-19
 */
import React, { Component } from 'react';
import { demo2 as url } from '../../network/api';
import { loadAndRefreshHOC, logPropsHOC } from '../HOC/index';

const Post = ({ contents, src, refresh }) => (
  <div>
    <p>{contents}</p>
    <button onClick={() => refresh()}>刷新</button>
    <div>
      <img src={src} alt="" />
    </div>
  </div>
);

const NewPost = logPropsHOC(loadAndRefreshHOC(url.getAnswer)(Post));

export default class Demo4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 5000);
  }

  render() {
    return (
      <NewPost count={this.state.count} />
    );
  }
}
