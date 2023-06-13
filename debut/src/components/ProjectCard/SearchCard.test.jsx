/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import SearchCard from './SearchCard';

describe('Home Page UI Test', () => {
  test('renders Project Image', () => {
    render(<SearchCard />);
    expect(screen.getByTestId(/projImg/))
      .toBeInTheDocument();
  });

  test('renders the project name', () => {
    render(<SearchCard />);
    expect(screen.getByTestId(/projName/))
      .toBeInTheDocument();
  });

  test('renders the project manager\'s name', () => {
    render(<SearchCard />);
    expect(screen.getByTestId(/projManagerName/))
      .toBeInTheDocument();
    expect(screen.getByTestId(/projManagerAvatar/))
      .toBeInTheDocument();
  });

  test('renders the project date', () => {
    render(<SearchCard />);
    expect(screen.getByTestId(/projDate/))
      .toBeInTheDocument();
  });

  test('renders the project tag', () => {
    render(<SearchCard />);
    expect(screen.getAllByTestId(/projTag/).length)
      .toBeGreaterThanOrEqual(1);
  });

  test('renders the project people requirements', () => {
    render(<SearchCard />);
    expect(screen.getAllByTestId(/projPeopleReq/).length)
      .toBeGreaterThanOrEqual(1);
  });
});
