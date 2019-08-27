import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import '../Styles/app.css';


render(<div>{App}</div>, document.getElementById('root'));
