/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Settings from './Settings';

describe('Settings Page UI Test', () => {
  test('update password', () => {
    render(
      <BrowserRouter>
        <Settings username="claire" />
      </BrowserRouter>,
    );
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify([{ name: 'claire', password: 'claire' }]));
    fireEvent.change(screen.getByPlaceholderText(/Old/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/New/), { target: { value: 'james' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm/), { target: { value: 'james' } });
    fireEvent.click(screen.getByText(/Update/));
    const errorMessage = screen.getByText(/Password changed./);
    expect(errorMessage)
      .toBeInTheDocument();
  });
  test('error update password do not match', () => {
    render(
      <BrowserRouter>
        <Settings username="claire" />
      </BrowserRouter>,
    );
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify([{ name: 'claire', password: 'claire' }]));
    fireEvent.change(screen.getByPlaceholderText(/Old/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/New/), { target: { value: 'james' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirm/), { target: { value: 'jam' } });
    fireEvent.click(screen.getByText(/Update/));
    const errorMessage = screen.getByText(/Passwords do not match/);
    expect(errorMessage)
      .toBeInTheDocument();
  });
  test('Change password', () => {
    render(<Settings />);
    expect(screen.getByText('Change Password'))
      .toBeInTheDocument();
    expect(screen.getByText('Old Password'))
      .toBeInTheDocument();
    expect(screen.getByText('New password'))
      .toBeInTheDocument();
    expect(screen.getByText('Confirm new password'))
      .toBeInTheDocument();
  });
  test('Update button', () => {
    render(<Settings />);
    expect(screen.getByText('Update'))
      .toBeInTheDocument();
  });
  test('Delete Account', () => {
    render(<Settings />);
    expect(screen.getByText('Delete Account'))
      .toBeInTheDocument();
    expect(screen.getByText(/Once you delete/))
      .toBeInTheDocument();
    expect(screen.getByText('Yes, Delete My Account'))
      .toBeInTheDocument();
  });
});
