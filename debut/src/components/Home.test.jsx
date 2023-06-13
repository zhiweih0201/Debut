/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home Page Unit Test', () => {
  test('search brings to new page', () => {
    render(<Home />);
    const linkElement = screen.getByPlaceholderText(/Search a project or a username/);
    expect(linkElement)
      .toBeInTheDocument();
    fireEvent.change(linkElement, { target: { value: 'kkkk' } });
    fireEvent.keyPress(linkElement, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(screen.getByTestId(/searchPage/));
  });
  test('click project brings to individual project page', () => {
    render(<Home />);
    fireEvent.click(screen.getAllByTestId(/projName/)[0]);
    const linkElement = screen.getByTestId(/individualProjectPage/);
    expect(linkElement)
      .toBeInTheDocument();
  });
});

describe('Home Page UI Test', () => {
  test('renders Search Bar with default text \'Search\'', () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/Search/))
      .toBeInTheDocument();
  });

  test('renders the project title', () => {
    render(<Home />);
    expect(screen.getByText(/All Projects/))
      .toBeInTheDocument();
  });

  test('renders the project tile', () => {
    render(<Home />);
    expect(screen.getAllByTestId(/projTile/).length)
      .toBeGreaterThanOrEqual(1);
  });
});
