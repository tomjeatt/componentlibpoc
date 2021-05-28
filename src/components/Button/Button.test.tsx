import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from './';

it('matches snapshot', () => {
  const { asFragment } = render(<Button label="label" />);
  expect(asFragment()).toMatchSnapshot();
});
