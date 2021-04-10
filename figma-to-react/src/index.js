import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterFClock } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterFClock />, document.body);
registerServiceWorker();
