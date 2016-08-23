import React from 'react';

import { render } from 'react-dom';
console.log('----in the bundle ----');
// Import css

// Import Components
import router from './routes';
// import react router deps
import { Provider } from 'react-redux';

render (router,document.getElementById('app'));
