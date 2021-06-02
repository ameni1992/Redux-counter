import React from 'react';
import ReactDOM from 'react-dom';
//Provider howa eli y5ali e store accessible lel app el kol
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';



ReactDOM.render(
  <Provider store= {store} >
    <App />
    </Provider>,
 
  document.getElementById('root')
 

);


