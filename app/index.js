import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import state from './reducers';
import App from './App';

const store = createStore(state);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);