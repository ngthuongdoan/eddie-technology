import React from 'react';
import './assets/scss/index.scss';
import './plugins';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement!.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
