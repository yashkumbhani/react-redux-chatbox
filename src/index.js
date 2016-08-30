import React from 'react';

// Import react router deps
import { Router ,browserHistory} from 'react-router';
import { render } from 'react-dom';
// Import css

// Import Components
import router from './router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();
const app = (
   <Provider store={store}>
      {router}
   </Provider>
);

render (app,document.getElementById('app'));
