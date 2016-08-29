// import react- router dependencies
import { Router, Route, IndexRoute , browserHistory} from 'react-router';
import  React  from 'react';

//import components

import App from './containers/App';
import Chat from './components/Chat';

const routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={Chat} />
    </Route>
  </Router>
);

export default routes;
