import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { TicketsListTable } from '../../tables/TicketsListTable';
import { AppDispatch } from '../../store/store';
import { fetchTickets, getTickets } from '../../store/ticketsSlice';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const TicketsListPage = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch<AppDispatch>();
    const tickets = useSelector(getTickets); 

    React.useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch]);

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    <TicketsListTable items={tickets} />
                </Paper>
            </Center>
        </PageLayout>
    );
};