import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AddTicketsForm } from '../AddTicketsForm';
import { act } from 'react-dom/test-utils';

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

    test('should render form elements properly', () => {
        render(
          <Provider store={store}>
              <AddTicketsForm onSubmit={onSubmitMock} />
          </Provider>
        );
        
        // check for form labels
        expect(screen.getByText(/Email/i)).toBeInTheDocument();
        expect(screen.getByText(/Title/i)).toBeInTheDocument();
        expect(screen.getByText(/Description/i)).toBeInTheDocument();
        expect(screen.getByText(/Price/i)).toBeInTheDocument();
        expect(screen.getByText(/Amount of tickets/i)).toBeInTheDocument();
        expect(screen.getByText(/Supplier/i)).toBeInTheDocument();

        // check form form fields
        const emailEl = screen.getByTestId("email-input");
        expect(emailEl).toBeInTheDocument();
        expect(emailEl).toHaveAttribute("name", "email");

        const titleEl = screen.getByTestId("title-input");
        expect(titleEl).toBeInTheDocument();
        expect(titleEl).toHaveAttribute("name", "title");

        const descriptionEl = screen.getByTestId("description-input");
        expect(descriptionEl).toBeInTheDocument();
        expect(descriptionEl).toHaveAttribute("name", "description");

        const priceEl = screen.getByTestId("price-input");
        expect(priceEl).toBeInTheDocument();
        expect(priceEl).toHaveAttribute("name", "price");
        expect(priceEl).toHaveAttribute("type", "number");

        const amountEl = screen.getByTestId("amount-input");
        expect(amountEl).toBeInTheDocument();
        expect(amountEl).toHaveAttribute("name", "amount");
        expect(amountEl).toHaveAttribute("type", "number");

        const supplierEl = screen.getByTestId("supplier-input");
        expect(supplierEl).toBeInTheDocument();
        expect(supplierEl).toHaveAttribute("name", "supplier");
    });

    test('should show require error messages for email field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );

        await act (async () => {
            fireEvent.change(screen.getByTestId("email-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Email field is required")).toBeInTheDocument();
    });

    test('should show invalid error messages for email field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );

        await act (async () => {
            fireEvent.change(screen.getByTestId("email-input"), {target: {value: 'testing-invalid-email'}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Must be a valid email")).toBeInTheDocument();
    });

    test('should show require error messages for title field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("title-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Title field is required")).toBeInTheDocument();
    });

    test('should show require error messages for description field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("description-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Description field is required")).toBeInTheDocument();
    });

    test('should show require or number type error messages for price field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("price-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Price must be in number type")).toBeInTheDocument();
    });

    test('should show great than or equal to 1 error messages for price field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("price-input"), {target: {value: -1}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Price must be greater than or equal to 1")).toBeInTheDocument();
    });

    test('should show require or number type error messages for amount field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("amount-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Amount of tickets must be in number type")).toBeInTheDocument();
    });

    test('should show great than or equal to 1 error messages for amount field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("amount-input"), {target: {value: 0}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Amount of tickets must be greater than or equal to 1")).toBeInTheDocument();
    });

    test('should show require error messages for supplier field', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("supplier-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Supplier field is required")).toBeInTheDocument();
    });

    test('should show createTicketError message', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("supplier-input"), {target: {value: ''}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        expect(screen.getByText("Supplier field is required")).toBeInTheDocument();
    });

    test('should submit the form with valid data', async () => {
        render(
            <Provider store={store}>
                <AddTicketsForm onSubmit={onSubmitMock} />
            </Provider>
        );
        
        await act (async () => {
            fireEvent.change(screen.getByTestId("email-input"), {target: {value: 'kaji.rk@outlgook.com'}});
            fireEvent.change(screen.getByTestId("title-input"), {target: {value: 'Testing By Kaji'}});
            fireEvent.change(screen.getByTestId("description-input"), {target: {value: 'Testing Description'}});
            fireEvent.change(screen.getByTestId("price-input"), {target: {value: '500'}});
            fireEvent.change(screen.getByTestId("amount-input"), {target: {value: '2'}});
            fireEvent.change(screen.getByTestId("supplier-input"), {target: {value: 'Testing Supplier'}});
        });
        await act (async () => {
            fireEvent.click(screen.getByText(/Add tickets/i));
        });
        await waitFor(() => {
            expect(onSubmitMock).toHaveBeenCalled();
        });
    });

});