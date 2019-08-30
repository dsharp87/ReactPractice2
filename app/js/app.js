import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { routes } from './Routes';

import { Provider } from 'react-redux';
import store from './store';




console.log("about to start virtualDOM render in app.js")
ReactDOM.render(
        <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);

