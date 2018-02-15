import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sponsor from './components/Sponsor';
import fulltimeProgramLanding from './components/Fulltimeprogram-Landing';

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/sponsors" component={Sponsor}/>
      <Route path="/fulltime" component={fulltimeProgramLanding}/>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
