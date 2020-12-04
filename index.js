import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
//import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
//import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
//import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


import RandomQuoteMachine from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
    <RandomQuoteMachine />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
