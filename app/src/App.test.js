import React from 'react';
import { render } from '@testing-library/react';
import App, { addCount } from './App';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

it('Renders without errors!', () => {
  // ARRANGE
  const div = document.createElement("div");

  // ACT
  ReactDOM.render(<App />, div);

  // CLEAN UP
  ReactDOM.unmountComponentAtNode(div);

  // ASSERTION - Rendered without exception
});

test('RTL Renders without Crashing', () => {
  render(<App />);
});

test('Function addCount has no errors!', () => {
  // ARRANGE
  const currentCount = 2;
  const expected = 3;

  // ACT
  const actual = addCount(currentCount);

  // ASSERT
  expect(actual).toBe(expected);
})