/**
 * Created by zh on 2019/3/1.
 */
import React, { Component } from 'react';
import style from './index.module.css';
import store from '../../../store';

import { createAction } from 'redux-actions';

import Request from '../../../network/request';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: store.getState().val3.status,
      answer: store.getState().val3.answer,
      question: store.getState().val3.question,
      questionInput: ''
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = false;
  }

  // 使用redux-promise中间件解决异步操作第二种写法
  sendQuestion() {
    const question = this.state.questionInput;

    // Action Creator1
    const requestPost = (question) => ({ type: 'SEND_QUESTION', status: 'sending...', question });

    // 发出同步Action
    store.dispatch(requestPost(question));

    // 重置输入框
    this.setState({
      questionInput: ''
    });

    // 发出异步Action
    store.dispatch(
      createAction('RECEIVE_ANSWER')(
        // Promise的then函数返回值才是createAction的第二个参数
        Request.getAnswer({ question }).then(v => (
          {
            status: '',
            answer: v
          })
        )
      )
    );
  }

  render() {
    const status = this.state.status;
    const answer = this.state.answer;
    const question = this.state.question;

    store.subscribe(() => {
      if (this._isMounted) {
        this.setState({
          status: store.getState().val3.status,
          answer: store.getState().val3.answer,
          question: store.getState().val3.question,
        });
      }
    });

    console.log(this.state.answer.image);

    return (
      <div>
        <input placeholder="input your question..." value={this.state.questionInput}
               onChange={(e) => this.setState({ questionInput: e.target.value })}
        />
        <button onClick={() => this.sendQuestion()}>send</button>
        {status}
        <p>The question is {question}</p>
        <p>The answer is {answer.answer}</p>
        <div className={style.imageContainer}>
          <img src={answer.image} alt="answer" className={style.image} />
        </div>
      </div>
    );
  }
}


