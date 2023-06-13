/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import Chat from './Chat';

describe('Chat Page UI Test', () => {
  test('renders the conversation title', () => {
    render(<Chat />);
    expect(screen.getByText(/Conversation/))
      .toBeInTheDocument();
  });
  test('renders the conversation title', () => {
    render(<Chat />);
    fireEvent.click(screen.getByText(/SEND/));
    expect(screen.getByText(/Conversation/))
      .toBeInTheDocument();
  });
});
