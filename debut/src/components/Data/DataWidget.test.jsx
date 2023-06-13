/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import DataWidget from './DataWidget';

describe('Home Page UI Test', () => {
  test('renders Project Image', () => {
    render(<DataWidget />);
    expect(screen.getByTestId(/widget-title/))
      .toBeInTheDocument();
  });
  test('renders Project Image', () => {
    render(<DataWidget />);
    expect(screen.getByTestId(/widget-num/))
      .toBeInTheDocument();
  });
});
