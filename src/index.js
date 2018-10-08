import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store/store';
import './index.scss';
import 'react-notifications/lib/notifications.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';


const app = (
  <Provider store={ store }>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
