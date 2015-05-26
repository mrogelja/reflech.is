var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Subject = mongoose.model('Subject');


router.route('/subjects')
  .get(function(req, res){
    if (req.query.q) {
      Subject.textSearch(req.query.q + '*', function(err, results){
        if (err) { res.send(err); }

        var subjects = [];

        results.results.forEach(function(result){
          subjects.push(result.obj);
        });

        res.json(subjects);
      });
    } else {
      Subject.find({}, function(err, subjects){
        if (err) { res.send(err); }

        res.json(subjects);
      });
    }

  })
  .post(function(req, res){
    var subject = new Subject();
    subject.name = req.body.name;
    subject.description = req.body.description;

    subject.save(function(err){
      if (err) {
        res.send(err);
      }

      res.json({ message : 'ok'});
    });
  });

router.route('/subjects/:subject_id')
  .get(function(req, res){
    Subject.findById(req.params.subject_id, function(err, subject){
      if (err) {
        res.send(err);
      }

      res.json(subject);
    });

  })
  .put(function(req, res){

    Subject.findById(req.params.subject_id, function(err, subject){
      if (err) {
        res.send(err);
      }

      var key;
      for (key in req.body){
        subject[key] = req.body[key];
      }

      subject.save(function(err){
        if (err) {
          res.send(err);
        }

        res.json({ message : 'ok'});
      });
    });
  })
  .delete(function(req, res) {
    Subject.remove({ _id : params.subject_id }, function (err, subject) {
      if (err) {
        res.send(err);
      }

      res.json({ message : 'ok'});
    });
  });


module.exports = router;
