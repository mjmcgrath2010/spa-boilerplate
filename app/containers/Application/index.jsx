import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AdminContainer from '../Admin/index.jsx';
import store from '../../store';

const Application = () => (
    <Provider store={store}>
        <Router>
            <Route exact path="/admin" component={AdminContainer} />
        </Router>
    </Provider>
);

export default Application;
