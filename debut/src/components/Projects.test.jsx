/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Projects from './Projects';

describe('Projects Page UI Test', () => {
  test('update password', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText(/title/), { target: { value: 'project' } });
    fireEvent.change(screen.getByPlaceholderText(/startDate/), { target: { value: '12-12-12' } });
    fireEvent.change(screen.getByPlaceholderText(/endDate/), { target: { value: '12-12-13' } });
    fireEvent.change(screen.getByPlaceholderText(/roleTitle/), { target: { value: 'Dancer' } });
    fireEvent.change(screen.getByPlaceholderText(/roleNum/), { target: { value: 4 } });
  });
  test('edit cover picture', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
    expect(screen.getByText('Edit Cover Picture'))
      .toBeInTheDocument();
  });
  test('basic information', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
    expect(screen.getByText('Basic Information'))
      .toBeInTheDocument();
    expect(screen.getByText('*Project Title'))
      .toBeInTheDocument();
    expect(screen.getByText('*Start Date'))
      .toBeInTheDocument();
    expect(screen.getByText('*End Date'))
      .toBeInTheDocument();
    expect(screen.getByText('*Project Category'))
      .toBeInTheDocument();
    expect(screen.getByText('*Description'))
      .toBeInTheDocument();
    expect(screen.getByText('*Project Title'))
      .toBeInTheDocument();
  });
  test('roles', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
    expect(screen.getByText('Role 1'))
      .toBeInTheDocument();
    expect(screen.getByText('*Role Title'))
      .toBeInTheDocument();
    expect(screen.getByText('*Number of Artists Needed'))
      .toBeInTheDocument();
    expect(screen.getByText('*Role Description'))
      .toBeInTheDocument();
    expect(screen.getByText(/Add Another Role/))
      .toBeInTheDocument();
  });
  test('cancel and publish buttons', () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>,
    );
    expect(screen.getByText('Cancel'))
      .toBeInTheDocument();
    expect(screen.getByText('Publish'))
      .toBeInTheDocument();
  });
});
