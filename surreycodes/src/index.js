import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sponsors from './containers/Sponsors/Sponsors';
import FulltimeProgram from './containers/FulltimeProgram/FulltimeProgram';
import CodeofConduct from "./containers/CodeofConduct/CodeofConduct";

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/sponsors" component={Sponsors}/>
      <Route path="/fulltime" component={FulltimeProgram}/>
      <Route path="/codeofconduct" component={CodeofConduct}/>
      <Route path="/community" component={CodeofConduct}/>
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
