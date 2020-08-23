import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home /* AboutMe,  Projects*/ } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about-me" component={AboutMe} /> */}
        {/* <Route path="/projects" component={Projects} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
