import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProps } from '../interfaces/form';
import { useForm, Controller } from 'react-hook-form';
import { Grid, Input, Textarea, Button, createStyles } from '@mantine/core';
import { FormLabel } from '../../view/components/Forms/FormLabel';
import { colors } from '../constants/colors';
import { ticketValidationSchema } from '../../data/models/Ticket';

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

export interface AddTicketsFormValues {
    email: string;
    title: string;
    description: string;
    price: string;
    amount: number;
    supplier: string;
}

const defaultValues: AddTicketsFormValues = {
    email: '',
    title: '',
    description: '',
    price: '',
    amount: 1,
    supplier: '',
};

export const AddTicketsForm = ({ onSubmit }: FormProps<AddTicketsFormValues>) => {

    const { control, handleSubmit, formState: { errors } } = useForm<AddTicketsFormValues>({ 
        resolver: yupResolver(ticketValidationSchema),
        defaultValues 
    });

    const { classes } = useStyles();

    return (
        <Grid>
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
                <Button onClick={handleSubmit(onSubmit)}>Add tickets</Button>
            </Grid.Col>
        </Grid>
    );
};
