import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss';

class App extends React.Component {
    render () {
        return <h1>Hello World from React What u talking bout</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
