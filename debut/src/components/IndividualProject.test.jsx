/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import IndividualProject from './IndividualProject';

describe('Individual Projects Page UI Test', () => {
  test('renders title', () => {
    render(<IndividualProject />);
    expect(screen.getByText('Project Title'))
      .toBeInTheDocument();
  });
  test('renders tag buttons', () => {
    render(<IndividualProject />);
    expect(screen.getByText('Concept Video'))
      .toBeInTheDocument();
    expect(screen.getByText('Comedy'))
      .toBeInTheDocument();
  });
  test('renders dates', () => {
    render(<IndividualProject />);
    expect(screen.getByText('Dates: Jan 19 - May 24'))
      .toBeInTheDocument();
  });
  test('renders apply, save, send buttons', () => {
    render(<IndividualProject />);
    expect(screen.getByText('Apply'))
      .toBeInTheDocument();
    expect(screen.getByText('Save'))
      .toBeInTheDocument();
    expect(screen.getByText('Share'))
      .toBeInTheDocument();
  });
  test('renders available roles', () => {
    render(<IndividualProject />);
    expect(screen.getByText('Available Roles'))
      .toBeInTheDocument();
    expect(screen.getByText('1'))
      .toBeInTheDocument();
    expect(screen.getByText('Dancer'))
      .toBeInTheDocument();
    expect(screen.getByText('2'))
      .toBeInTheDocument();
    expect(screen.getByText('Actor'))
      .toBeInTheDocument();
  });
});
