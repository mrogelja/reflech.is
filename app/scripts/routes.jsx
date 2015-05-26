import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';
import Application from './components/Application.react.js';
import SubjectsStarter from './components/SubjectsStarter.react.js';
import SubjectCreatePanel from './components/SubjectCreatePanel.react.js';
import SubjectSearchPanel from './components/SubjectSearchPanel.react.js';
import Subject from './components/Subject.react.js';

export default (
  <Route name="home" path="/" handler={Application}>
    <Route name="create" handler={SubjectCreatePanel}/>
    <Route name="search" handler={SubjectSearchPanel}/>
    <Route name="subject" path="/subject/:subjectId" handler={Subject} />

    <DefaultRoute handler={SubjectsStarter}/>
  </Route>
);
