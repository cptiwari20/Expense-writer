import React from 'react';
import ReactDOM from 'react-dom';

import AppRoutes from './router/AppRoutes';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<AppRoutes />, document.querySelector('#app'));
