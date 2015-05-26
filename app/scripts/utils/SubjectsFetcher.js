import superagent from "superagent";

class SubjectsFetcher {
  fetch(filter) {
    return new Promise(function(resolve, reject) {
      var queryParams = filter ? '?q=' + filter : '';
      superagent.get('http://localhost:3000/api/subjects' + queryParams)
      .end(function(err, res){
          if(res.ok) {
            resolve(res.body);
          } else {
            reject(err);
          }
        });
    });
  }

  get(subject) {
    return new Promise(function(resolve, reject) {
      superagent.get('http://localhost:3000/api/subjects/' + subject._id)
        .end(function(err, res){
          if(res.ok) {
            resolve(res.body);
          }
        });
    });
  }

  add(subject) {
    return new Promise(function(resolve, reject) {
      superagent.post('http://localhost:3000/api/subjects')
        .send(subject)
        .end(function(err, res){
          if(res.ok) {
            resolve(res.body);
          }
        });
    });
  }
}

export default new SubjectsFetcher();
