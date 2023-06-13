import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Login Page UI Test', () => {
  test('renders sign in button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/LOGIN/);
    expect(linkElement)
      .toBeInTheDocument();
  });

  test('renders register button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText(/LOGIN/));
    const linkElement = screen.getByText(/REGISTER/);
    expect(linkElement)
      .toBeInTheDocument();
  });

  test('renders textfield for email address', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkElement = screen.getByPlaceholderText(/abc@gmail.com/);
    expect(linkElement)
      .toBeInTheDocument();
  });

  test('renders textfield for password', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkElement = screen.getByPlaceholderText(/xxxxxx/);
    expect(linkElement)
      .toBeInTheDocument();
  });

  test('renders start button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/Register/);
    expect(linkElement)
      .toBeInTheDocument();
    fireEvent.click(screen.getByText(/LOGIN/));
    expect(screen.getByText(/Start/))
      .toBeInTheDocument();
  });

  test('renders forget password button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText(/LOGIN/));
    const linkElement = screen.getByText(/forgot your password/);
    expect(linkElement)
      .toBeInTheDocument();
  });

  test('renders alphanumeric warning', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: '!!!' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'abcde' } });
    fireEvent.click(screen.getByText(/Register/));
    const errorMessage = screen.getByText(/Entered username is invalid. Please enter alphanumeric names only./);
    expect(errorMessage)
      .toBeInTheDocument();
  });

  test('renders no password warning', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'abcde' } });
    fireEvent.click(screen.getByText(/Register/));
    const errorMessage = screen.getByText(/Password cannot be empty. Please try again/);
    expect(errorMessage)
      .toBeInTheDocument();
  });

  test('error username exists has to login', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'claire' } });
    fireEvent.click(screen.getByText(/Register/));
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'claire' } });
    fireEvent.click(screen.getByText(/Register/));
    const errorMessage = screen.getByText(/Username exists. Please login./);
    expect(errorMessage)
      .toBeInTheDocument();
  });

  test('error username does not exist, has to register', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText(/LOGIN/));
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'meet' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'meet' } });
    fireEvent.click(screen.getByText(/Start/));
    const errorMessage = screen.getByText(/Username does not exist. Please register/);
    expect(errorMessage)
      .toBeInTheDocument();
  });

  test('error name and password do not match', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'claire' } });
    fireEvent.click(screen.getByText(/Register/));
    fireEvent.click(screen.getByText(/LOGIN/));
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'ppp' } });
    fireEvent.click(screen.getByText(/Start/));
    const errorMessage = screen.getByText(/Username and password do not match/);
    expect(errorMessage)
      .toBeInTheDocument();
  });

  test('renders the navbar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'claire' } });
    fireEvent.click(screen.getByText(/Register/));
    fireEvent.click(screen.getByText(/LOGIN/));
    fireEvent.change(screen.getByPlaceholderText(/abc@gmail.com/), { target: { value: 'claire' } });
    fireEvent.change(screen.getByPlaceholderText(/xxxxxx/), { target: { value: 'claire' } });
    fireEvent.click(screen.getByText(/Start/));
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
    fireEvent.click(screen.getByTestId('home'));
    expect(screen.getByTestId(/homePage/));
    fireEvent.click(screen.getByTestId('project'));
    expect(screen.getByTestId(/projectPage/));
    fireEvent.click(screen.getByTestId('message'));
    expect(screen.getByTestId(/messagePage/));
    fireEvent.click(screen.getByTestId('profile'));
    expect(screen.getByTestId(/profilePage/));
    // fireEvent.click(screen.getByTestId('dashboard'));
    // expect(screen.getByTestId(/dashboardPage/));
    fireEvent.click(screen.getByTestId('settings'));
    expect(screen.getByTestId(/settingsPage/));
    fireEvent.click(screen.getByTestId('logout'));
    expect(screen.getByTestId(/loginPage/));
  });
});
