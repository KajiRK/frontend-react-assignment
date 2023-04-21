import { rest } from 'msw';
import { Ticket } from '../data/models/Ticket';

export const mockedTickets: Ticket[] = [
    {
        "id": 1,
        "title": "title",
        "description": "test description",
        "price": 10,
        "amount": 4,
        "supplier": "test supplier",
        "email": "test2@example.com"
    },
    {
        "id": 2,
        "title": "title 2",
        "description": "test description 2",
        "price": 10,
        "amount": 4,
        "supplier": "test supplier 2",
        "email": "test2@example.com"
    },
    {
        "id": 2,
        "title": "title 2",
        "description": "test description 2",
        "price": 10,
        "amount": 4,
        "supplier": "test supplier 2",
        "email": "test2@example.com"
    }
];

export const handlers = [
    rest.get('http://localhost:5000/tickets', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(mockedTickets)
        )
    })
];