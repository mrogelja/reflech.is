var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  routes = require('./app/scripts/routes'),
  Router = require('react-router'),
  React = require('react'),
  path  = require('path'),
  Iso   = require('iso'),
  alt   = require('./app/scripts/alt.js');

var app  = express();
var port = 3000;

// Activer le livereload pour le server de développement.
if(process.env.NODE_ENV != 'production') {
  app.use(require('connect-livereload')());
}

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.disable('etag');

app.use('/', express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  alt.bootstrap(JSON.stringify(res.locals.data || {}));

  var iso = new Iso();

  Router.run(routes, req.url, function(Handler, state) {
    var content = React.renderToString(React.createElement(Handler));

    iso.add(content, alt.flush());

    return res.render('index', {
      markup: iso.render()
    });
  });
});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
