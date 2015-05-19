import Router from 'react-router';
import React from 'react';
import routes from 'routes.jsx';
import Iso  from 'iso';
import alt from './alt';

Iso.bootstrap(function(state, _, container){
  alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});

