/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavMenu from './NavMenu';
import Home from '../Home';

describe('NavMenu Test', () => {
  test('renders all names', () => {
    render(
      <BrowserRouter>
        <NavMenu />
      </BrowserRouter>,
    );
    expect(screen.getByText('Home'))
      .toBeInTheDocument();
    expect(screen.getByText('Project'))
      .toBeInTheDocument();
    expect(screen.getByText('Message'))
      .toBeInTheDocument();
    expect(screen.getByText('Profile'))
      .toBeInTheDocument();
    expect(screen.getByText('Dashboard'))
      .toBeInTheDocument();
    expect(screen.getByText('Settings'))
      .toBeInTheDocument();
    expect(screen.getByText('Logout'))
      .toBeInTheDocument();
  });
  // test('renders home page', () => {
  //   render(
  //     <BrowserRouter>
  //       <NavMenu />
  //     </BrowserRouter>,
  //   );
  //   fireEvent.click(screen.getByTestId('home'));
  //   expect(screen.getByTestId(/homePage/));
  // });
});
