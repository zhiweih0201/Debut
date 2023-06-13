/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import Profile from './Profile';

describe('Profile Page UI Test', () => {
  // test('renders the navbar', () => {
  //   render(<Profile />);
  //   expect(screen.getByText('Home'))
  //     .toBeInTheDocument();
  //   expect(screen.getByText('Projects'))
  //     .toBeInTheDocument();
  //   expect(screen.getByText('Messages'))
  //     .toBeInTheDocument();
  //   expect(screen.getByText('Profile'))
  //     .toBeInTheDocument();
  // });

  test('renders field names', () => {
    render(<Profile />);
    expect(screen.getByText(/Name/))
      .toBeInTheDocument();
    expect(screen.getAllByText(/Email/)[0])
      .toBeInTheDocument();
    expect(screen.getAllByText('Year')[0])
      .toBeInTheDocument();
    expect(screen.getAllByText('Phone Number')[0])
      .toBeInTheDocument();
    expect(screen.getAllByText('Bio')[0])
      .toBeInTheDocument();
  });
  test('field descriptions', () => {
    render(<Profile />);
    expect(screen.getAllByText(/Introduce yourself/)[0])
      .toBeInTheDocument();
    expect(screen.getAllByText(/Add a skill from/)[0])
      .toBeInTheDocument();
  });
  test('cancel and publish buttons', () => {
    render(<Profile />);
    expect(screen.getByText('Cancel'))
      .toBeInTheDocument();
    expect(screen.getAllByText('Publish')[0])
      .toBeInTheDocument();
  });
});
