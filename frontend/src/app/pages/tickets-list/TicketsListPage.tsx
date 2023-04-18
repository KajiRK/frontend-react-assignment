import React from 'react';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { colors } from '../../constants/colors';
import { TicketsListTable } from '../../tables/TicketsListTable';
import { getTickets } from '../../../data/services/Tickets';
import { useDispatch, useSelector } from 'react-redux';
import { addTickets, fetchTickets } from '../../store/ticketsSlice';

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
    const dispatch = useDispatch();
    const tickets = useSelector(fetchTickets); 

    React.useEffect(() => {
        const loadTickets = async () => {
            const response = await getTickets();
            dispatch(addTickets(response));
        };
        loadTickets();
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