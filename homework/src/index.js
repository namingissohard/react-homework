import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store/list'
ReactDOM.render(<App list={Store} />, document.getElementById('root'));
registerServiceWorker();
