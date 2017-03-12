import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import routes from './routes';
import './index.css';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    {routes}
  </Router>,
  document.getElementById('root')
);
