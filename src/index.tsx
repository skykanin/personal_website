import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './Components/Wrapper/Wrapper';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Wrapper title="Website under construction" footer="Wait a moment.js"/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
