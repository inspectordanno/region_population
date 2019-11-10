import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import UrbanApp from './components/UrbanApp';

const jsx = (
  <UrbanApp />
);

ReactDOM.render(jsx, document.getElementById('app'));