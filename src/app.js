import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import CountryApp from './components/CountryApp';

const jsx = (
  <CountryApp />
);

ReactDOM.render(jsx, document.getElementById('app'));