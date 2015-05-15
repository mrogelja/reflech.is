import Router from 'react-router';
import React from 'react';
import Application from 'components/Application.react.js';

import SubjectsStarter from 'components/SubjectsStarter.react.js';
import SubjectCreatePanel from 'components/SubjectCreatePanel.react.js';
import SubjectSearchPanel from 'components/SubjectSearchPanel.react.js';

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="home" path="/" handler={Application}>
    <Route name="create" handler={SubjectCreatePanel}/>
    <Route name="search" handler={SubjectSearchPanel}/>

    <DefaultRoute handler={SubjectsStarter}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
