// import react- router dependencies
import { Redirect, Router, Route, IndexRoute ,browserHistory} from 'react-router';
import { React } from 'react';

//import components

import App from './components/App';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      hi
    </Route>
  </Router>

);

export default router;
