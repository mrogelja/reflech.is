var express = require('express'),
  exphbs = require('express-handlebars'),
  http = require('http'),
  routes = require('./app/scripts/routes'),
  Router = require('react-router'),
  React = require('react'),
  path  = require('path'),
  Iso   = require('iso'),
  alt   = require('./app/scripts/alt.js'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  bodyParser = require('body-parser');

var app  = express();
var port = 3000;

mongoose.connect('mongodb://localhost/reflech_is');
mongoose.connection.on("error", function (err) {
  console.log(err);
});

/**
 * Load the models
 */
var modelsPath = path.join(__dirname, 'api/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (~file.indexOf("js")) {
    require(modelsPath + "/" + file);
  }
});


var apiRoutes = require('./api/routes');

// Activer le livereload pour le server de développement.
if(process.env.NODE_ENV != 'production') {
  app.use(require('connect-livereload')());
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.disable('etag');

app.use('/', express.static(path.join(__dirname, 'dist')));

app.use('/api', apiRoutes);

var SubjectsFetcher = require('./app/scripts/utils/SubjectsFetcher');

/*app.use(function(req, res, next) {

});*/

app.use(function(req, res, next) {

  SubjectsFetcher.fetch().then((subjects) => {
    let data = {
      SubjectStore:  subjects
    };

    alt.bootstrap(JSON.stringify(data));

    var iso = new Iso();

    Router.run(routes, req.url, function (Handler, state) {
      var content = React.renderToString(React.createElement(Handler));

      iso.add(content, alt.flush());

      return res.render('index', {
        markup: iso.render()
      });
    });

  }).catch((e) => { res.send(e.stack); });


});

var server = http.createServer(app).listen(port, function() {
  console.log('Express server listening on port ' + port);
});
