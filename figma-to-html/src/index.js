import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterProfile } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterProfile />, document.body);
registerServiceWorker();
