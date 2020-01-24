import React from 'react';
import { render } from '@testing-library/react';
import App, { addCount } from './App';
import { unmountComponentAtNode } from 'react-dom';

it('Renders without errors!', () => {
  const div = document.createElement("div");

  render(<App />, div);

  unmountComponentAtNode(div);
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