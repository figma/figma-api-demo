import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterClock } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterClock />, document.body);
registerServiceWorker();
