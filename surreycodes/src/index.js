import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Sponsors from './containers/Sponsors/Sponsors'
import FulltimeProgram from './containers/FulltimeProgram/FulltimeProgram'
import CodeofConduct from './containers/CodeofConduct/CodeofConduct'
import About from './components/About/About'
import Team from './containers/Team/Team'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WhenLeavingView from './components/WhenLeavingView'
import NotFound from './components/NotFound/NotFound'

import registerServiceWorker from './registerServiceWorker'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <WhenLeavingView>
        {({ isLeavingView }) => <Header animate={isLeavingView} />}
      </WhenLeavingView>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/fulltime" component={FulltimeProgram} />
        <Route path="/codeofconduct" component={CodeofConduct} />
        <Route path="/about-us" component={About}/>
        <Route path="/team" component={Team}/>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
