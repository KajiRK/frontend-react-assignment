import axios from '../../app/constants/axios';
import { AddTicketsFormValues, StoreTicketRequest } from '../../data/models/Ticket';

// service to get tickets
export const getTickets = async () => {
    const { data: tickets } = await axios.get('/tickets');
    return tickets.data;
};

// service to store ticket
export const storeTicket = async (ticket: AddTicketsFormValues) => {
    const reqData: StoreTicketRequest = { ticket };
    const { data: message } = await axios.post('/tickets', reqData);
    return message;
};