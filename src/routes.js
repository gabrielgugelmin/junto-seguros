import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './app/pages/Main';
import Search from './app/pages/Search';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}
