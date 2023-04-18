import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
    tickets:[]
};

export const ticketsSlice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        addTickets: (state, {payload}) => {
            state.tickets = payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addTickets } = ticketsSlice.actions;
export const fetchTickets = (state: RootState) => state.tickets.tickets;

export default ticketsSlice.reducer;
