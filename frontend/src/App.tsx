import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { MantineProvider } from '@mantine/core';
import Router from './router';

function App() {
    return (
        <Provider store={store}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: 'light',
                }}
            >
                <Router />
            </MantineProvider>
        </Provider>
    );
}

export default App;
