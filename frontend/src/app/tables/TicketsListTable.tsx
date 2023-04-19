import React from 'react';
import { Table } from '@mantine/core';
import { Ticket } from '../../data/models/Ticket';

interface TicketsListTableProps {
    items: Ticket[];
}

export const TicketsListTable = ({ items }: TicketsListTableProps) => {
    const rows = items.map((element) => (
        <tr key={element.id}>
            <td>{element.email}</td>
            <td>{element.title}</td>
            <td>{element.description}</td>
            <td>{element.price}</td>
            <td>{element.amount}</td>
            <td>{element.supplier}</td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Supplier</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </Table>
    );
};
