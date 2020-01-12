import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
