import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "react-multi-carousel/lib/styles.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  
  </BrowserRouter>,
  document.getElementById('root')
);


