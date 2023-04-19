import * as yup from 'yup';

export interface Ticket {
    id: number;
    email: string;
    title: string;
    description: string;
    price: number;
    amount: number;
    supplier: string;
}

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

export interface StoreTicketRequest {
    ticket: AddTicketsFormValues;
}

export interface TicketStateValues {
    tickets: Ticket[];
}

export const ticketValidationSchema = yup
    .object({
        email: yup.string().required('Email field is required').email('Must be a valid email'),
        title: yup.string().required('Title field is required'),
        description: yup.string().required('Description field is required'),
        price: yup.number().typeError('Price must be in number type').min(1, 'Price must be greater than or equal to 1'),
        amount: yup.number().typeError('Amount of tickets must be in number type').min(1, 'Amount must be greater than or equal to 1'),
        supplier: yup.string().required('Supplier field is required')
    }).required();
