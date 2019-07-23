import React from 'react';
import ReactDOM from 'react-dom';

import Application from './containers/Application/index.jsx';
import './scss/app.scss';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Application />, document.getElementById('app'));
