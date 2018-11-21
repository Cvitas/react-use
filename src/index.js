import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, perStore } from '@/store'
import history from '@/routes/history'
import App from './containers/app'

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={ perStore }>
            <Router history={ history } basename="/">
                <Route path="/" component={ App }></Route>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('index')
);
