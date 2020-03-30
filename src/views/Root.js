import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Todos from 'views/Todos';
import Bookmarks from 'views/Bookmarks';
import Timer from 'views/Timer';

const Root = () => (
  <>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/notes" />} />
          <Route path="/notes" component={Notes} />
          <Route path="/notes" component={Notes} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/todos" component={Todos} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </>
);

export default Root;
