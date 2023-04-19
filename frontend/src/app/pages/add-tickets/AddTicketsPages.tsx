import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Paper, createStyles, Center } from '@mantine/core';
import { PageLayout } from '../../../view/components/PageLayout/PageLayout';
import { AddTicketsForm } from '../../forms/AddTicketsForm';
import { AddTicketsFormValues } from '../../../data/models/Ticket';
import { colors } from '../../constants/colors';
import { AppDispatch } from '../../store/store';
import { createTicket } from '../../store/ticketsSlice';

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}));

export const AddTicketsPage = () => {
    const { classes } = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const onFormSubmit = (values: AddTicketsFormValues) => {
        dispatch(createTicket(values));
        navigate('/tickets');
    };

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    );
};