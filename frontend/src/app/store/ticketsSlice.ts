import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from '../../app/constants/axios';
import { Ticket, TicketStateValues, AddTicketsFormValues, StoreTicketRequest } from '../../data/models/Ticket';

const initialState: TicketStateValues = {
    tickets: [],
    fetchTicketsError: false,
    fetchTicketsErrorMessage: '',
    createTicketSuccess: false,
    createTicketSuccessMessage: '',
    createTicketError: false,
    createTicketErrorMessage: ''
};

export const fetchTickets = createAsyncThunk (
    "fetch/tickets", 
    async () => {
        const response = await axios.get('/tickets');
        const tickets: Ticket[] = response.data.data;
        return tickets;
    }
);

export const createTicket = createAsyncThunk (
    "create/ticket", 
    async (ticket: AddTicketsFormValues) => {
        const reqData: StoreTicketRequest = { ticket };
        const response = await axios.post('/tickets', reqData);
        return response.data;
    }
);

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetch tickets
        builder.addCase(fetchTickets.pending, (state) => {
            state.fetchTicketsError = false;
            state.fetchTicketsErrorMessage = '';
        });
        builder.addCase(fetchTickets.fulfilled, (state, {payload}) => {
            return {...state, tickets: payload}
        });
        builder.addCase(fetchTickets.rejected, (state, {error}) => {
            state.fetchTicketsError = true;
            state.fetchTicketsErrorMessage = error.message;
        });

        // add ticket
        builder.addCase(createTicket.pending, (state) => {
            state.createTicketSuccess = false;
            state.createTicketSuccessMessage = '';
            state.createTicketError = false;
            state.createTicketErrorMessage = '';
        });
        builder.addCase(createTicket.fulfilled, (state, {payload}) => {
            state.createTicketSuccess = true;
            state.createTicketSuccessMessage = payload.message
        });
        builder.addCase(createTicket.rejected, (state, {error}) => {
            state.createTicketError = true;
            state.createTicketErrorMessage = error.message;
        });
    }
});

// Action creators are generated for each case reducer function
export const getTickets = (state: RootState) => state.tickets.tickets;

// fetch tickets related responses
export const getFetchTicketsError = (state: RootState) => state.tickets.fetchTicketsError;
export const getFetchTicketsErrorMessage = (state: RootState) => state.tickets.fetchTicketsErrorMessage;

// add ticket related responses
export const getCreateTicketSuccess = (state: RootState) => state.tickets.createTicketSuccess;
export const getCreateTicketSuccessMessage = (state: RootState) => state.tickets.createTicketSuccessMessage;
export const getCreateTicketError = (state: RootState) => state.tickets.createTicketError;
export const getCreateTicketErrorMessage = (state: RootState) => state.tickets.createTicketErrorMessage;

export default ticketsSlice.reducer;
