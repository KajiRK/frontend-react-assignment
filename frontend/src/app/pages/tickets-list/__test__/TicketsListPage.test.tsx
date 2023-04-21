import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { TicketsListTable } from '../../../tables/TicketsListTable';

describe('ensure tickets list page render well', () => {
    const initialState = { tickets: [] };
    const mockStore = configureStore();
    const store = mockStore(initialState);

    test('should have message No Tickets Found when table with no data', () => {
        render(
            <Provider store={store}>
                <TicketsListTable items={[]} />
            </Provider>
        );
        expect(screen.getByText(/No Tickets Found!/)).toBeInTheDocument();
    });

});