/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Messages from './Messages';

describe('Messages Page UI Test', () => {
  test('search page has search bar', () => {
    render(
      <BrowserRouter>
        <Messages />
      </BrowserRouter>,
    );
    const linkElement = screen.getByTestId(/messagePage/);
    expect(linkElement)
      .toBeInTheDocument();
  });
});
