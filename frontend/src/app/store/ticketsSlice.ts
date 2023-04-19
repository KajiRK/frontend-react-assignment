import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import axios from '../../app/constants/axios';
import { Ticket, TicketStateValues, AddTicketsFormValues, StoreTicketRequest } from '../../data/models/Ticket';

const initialState: TicketStateValues = {
    tickets: []
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
        return response;
    }
);

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.pending, () => {
            console.log('Pending');
        });
        builder.addCase(fetchTickets.fulfilled, (state, {payload}) => {
            return {...state, tickets: payload}
        });
        builder.addCase(fetchTickets.rejected, () => {
            console.log('Rejected');
        });
    }
});

// Action creators are generated for each case reducer function
export const getTickets = (state: RootState) => state.tickets.tickets;

export default ticketsSlice.reducer;
