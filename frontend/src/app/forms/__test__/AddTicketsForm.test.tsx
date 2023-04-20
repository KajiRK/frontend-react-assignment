import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AddTicketsForm } from '../AddTicketsForm';

describe('ensure add ticket form render well', () => {
    const onSubmitMock = jest.fn();
    const initialState = { tickets: [] };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    afterEach(() => {
        onSubmitMock.mockReset();
    });
  
    test('should render add ticket form', () => {
        render(
          <Provider store={store}>
              <AddTicketsForm onSubmit={onSubmitMock} />
          </Provider>
        );
        expect(screen.getByText(/Add tickets/i)).toBeInTheDocument();
    });

});