import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MasterListContainer } from './figmaComponents';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MasterListContainer listSource='/ducks.json' />, document.body);
registerServiceWorker();
