import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, AboutMe, Projects, CV } from './components/pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="CV" component={CV} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
