import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Table, Alert, createStyles } from '@mantine/core';
import { Ticket } from '../../data/models/Ticket';
import { getFetchTicketsError, getFetchTicketsErrorMessage } from '../store/ticketsSlice';

const useStyles = createStyles(() => ({
    errorMessage: {
        marginBottom: 10
    }
}));

interface TicketsListTableProps {
    items: Ticket[];
}

export const TicketsListTable = ({ items }: TicketsListTableProps) => {
    const { classes } = useStyles();

    // error reponses from GET Ticket 
    const fetchTicketsError = useSelector(getFetchTicketsError); 
    const fetchTicketsErrorMessage = useSelector(getFetchTicketsErrorMessage); 

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
        <>
            {fetchTicketsError && (
                <Grid className={classes.errorMessage}>
                    <Grid.Col span={12}>
                        <Alert title="Error!" color="red">
                            {fetchTicketsErrorMessage}
                        </Alert>
                    </Grid.Col>
                </Grid>
            )}

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
        </>
    );
};
