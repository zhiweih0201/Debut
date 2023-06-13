/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';

describe('Search Page UI Test ', () => {
  test('search page has search bar', () => {
    render(<Search />);
    const linkElement = screen.getByPlaceholderText(/Search a project or a username/);
    expect(linkElement)
      .toBeInTheDocument();
  });
  test('search page has user card', () => {
    render(<Search />);
    const linkElement = screen.getAllByTestId(/userCardComponent/)[0];
    expect(linkElement)
      .toBeInTheDocument();
  });
  test('search page has project card', () => {
    render(<Search />);
    const linkElement = screen.getAllByTestId(/searchCardComponent/)[0];
    expect(linkElement)
      .toBeInTheDocument();
  });
});
