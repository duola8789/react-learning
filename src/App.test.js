import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const sum = (a, b) => a + b;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  expect(sum(1, 2)).toBe(3);
});
