import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import Router from './router';

function App() {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;
