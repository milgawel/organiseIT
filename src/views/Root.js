import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Tasks from 'views/Tasks';
import Bookmarks from 'views/Bookmarks';
import Timers from 'views/Timers';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/notes" />} />
          <Route path="/notes" component={Notes} />
          <Route path="/notes" component={Notes} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/timers" component={Timers} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
