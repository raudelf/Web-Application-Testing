import React from 'react';
import { render, getByText } from '@testing-library/react';
import App, { addCount, hitBtn } from './App';
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

test('Top Display has no errors!', () => {
  // ARRANGE
  const { getByText } = render(<App />);

  // ACT
  getByText(/home/i);
  getByText(/inning/i);
  getByText(/away/i);
})

test('Bottom Display has no errors!', () => {
  // ARRANGE
  const expectedElements = 2;
  const { getAllByText } = render(<App />);

  // ACT
  const ballElements = getAllByText(/ball/i);
  const strikeElements = getAllByText(/strike/i)
  const outElements = getAllByText(/out/i);

  // ASSERTION
  expect(ballElements.length).toBe(expectedElements);
  expect(strikeElements.length).toBe(expectedElements);
  expect(outElements.length).toBe(expectedElements);
}
)