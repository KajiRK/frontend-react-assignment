import axios from '../../app/constants/axios';

// service to get tickets
export const getTickets = async () => {
    const { data: tickets } = await axios.get('/tickets');
    return tickets.data;
};