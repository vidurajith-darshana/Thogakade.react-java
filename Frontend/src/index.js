import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {browserHistory} from 'react-router';

import './index.css';
import App from './App';

const app = (
    <BrowserRouter basename="/" history={browserHistory}>
    <App />
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));