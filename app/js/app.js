import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Home from './views/Home';
import Users from './views/Users';

import '../scss/app.scss';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='users' component={ Users } />
    </Route>
  </Router>,
  document.getElementById('app')
);
