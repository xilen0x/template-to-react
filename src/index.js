import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home.jsx'
// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

import * as serviceWorker from './serviceWorker';
import 'jquery';
import 'popper.js';
import 'bootstrap';

ReactDOM.render(<Home />, document.getElementById('root'));


serviceWorker.unregister();
