import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('ensure app render well', () => {
    const initialState = { tickets: [] };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    test("render app component", () => {
      render(
        <Provider store={store}>
            <App />
        </Provider>
      );
      expect(screen.getByText(/Add Tickets/)).toBeInTheDocument();
    });

    test("should have link to home", () => {
      render(
        <Provider store={store}>
            <App />
        </Provider>
      );
      expect(screen.getByRole('link', { name: /home/i})).toBeInTheDocument();
    });

    test("should navigate to home page when user click on Home link", async () => {
      render(
        <Provider store={store}>
            <App />
        </Provider>
      );
      fireEvent.click(screen.getByRole('link', { name: /home/i}))
      await screen.findByText('Email'); // label name of ticket form first element
    });

    test("should have link to tickets", () => {
      render(
        <Provider store={store}>
            <App />
        </Provider>
      );
      expect(screen.getByRole('link', { name: /tickets/i})).toBeInTheDocument();
    });

    test("should navigate to tickets list page when user click on Tickets link", async () => {
      render(
        <Provider store={store}>
            <App />
        </Provider>
      );
      fireEvent.click(screen.getByRole('link', { name: /tickets/i}))
      await screen.findByText('Tickets list'); // tickets lits page heading
    });

});