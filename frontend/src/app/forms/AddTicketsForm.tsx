import React from 'react';
import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Textarea, Button, createStyles, Alert } from '@mantine/core';
import { colors } from '../constants/colors';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { FormProps } from '../interfaces/form';
import { AddTicketsFormValues, ticketValidationSchema } from '../../data/models/Ticket';
import { getCreateTicketSuccess, getCreateTicketSuccessMessage, getCreateTicketError, getCreateTicketErrorMessage } from '../store/ticketsSlice';

const useStyles = createStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    errorMessage: {
        color: colors.red,
        fontSize: '.875rem'
    },
}));

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {
    const { classes } = useStyles();

    const { control, handleSubmit, reset, formState: { errors } } = useForm<AddTicketsFormValues>({ 
        resolver: yupResolver(ticketValidationSchema),
        defaultValues 
    });

    const handleOnSubmit = (data: AddTicketsFormValues) => {
        onSubmit(data);
        reset();
    };

    // error and succuess reponses from POST Ticket 
    const createTicketError = useSelector(getCreateTicketError); 
    const createTicketErrorMessage = useSelector(getCreateTicketErrorMessage); 
    const createTicketSuccess = useSelector(getCreateTicketSuccess); 
    const createTicketSuccessMessage = useSelector(getCreateTicketSuccessMessage); 

    return (
        <Grid>
            {createTicketError && (
                <Grid.Col span={12}>
                    <Alert title="Error!" color="red">
                        {createTicketErrorMessage}
                    </Alert>
                </Grid.Col>
            )}
            {createTicketSuccess && (
                <Grid.Col span={12}>
                    <Alert title="Success!" color="green">
                        {createTicketSuccessMessage}
                    </Alert>
                </Grid.Col>
            )}
            <Grid.Col span={12}>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Email</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.email && (
                                    <span className={classes.errorMessage}>{errors.email.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="title"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Title</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.title && (
                                    <span className={classes.errorMessage}>{errors.title.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="description"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Description</FormLabel>
                                <Textarea onChange={onChange} value={value} name={name} />
                                {errors.description && (
                                    <span className={classes.errorMessage}>{errors.description.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="price"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                {errors.price && (
                                    <span className={classes.errorMessage}>{errors.price.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Amount of tickets</FormLabel>
                                <Input
                                    type="number"
                                    onChange={onChange}
                                    value={value}
                                    name={name}
                                />
                                {errors.amount && (
                                    <span className={classes.errorMessage}>{errors.amount.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12}>
                <Controller
                    name="supplier"
                    control={control}
                    render={({ field: { onChange, value, name } }) => {
                        return (
                            <>
                                <FormLabel>Supplier</FormLabel>
                                <Input onChange={onChange} value={value} name={name} />
                                {errors.supplier && (
                                    <span className={classes.errorMessage}>{errors.supplier.message}</span>
                                )}
                            </>
                        );
                    }}
                />
            </Grid.Col>
            <Grid.Col span={12} className={classes.buttonContainer}>
                <Button onClick={handleSubmit(handleOnSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
