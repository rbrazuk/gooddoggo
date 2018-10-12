import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Services from './components/services/services';
import Policies from './components/policies/policies';
import Resources from './components/resources/resources';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/resources" component={Resources}/>
        <Route path="/policies" component={Policies}/>
        <Route path="/services" component={Services}/>
        <Route path="/" component={About}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));

serviceWorker.unregister();
