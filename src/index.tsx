import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './Components/App/App';
import Clock from './Components/Clock/Clock'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Clock test="test"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
