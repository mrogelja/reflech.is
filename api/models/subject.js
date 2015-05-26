var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var textSearch = require('mongoose-text-search');

var SubjectSchema = new Schema({
  name: { type: String, required : true, unique: true},
  description: {type: String}
});

SubjectSchema.plugin(textSearch);
SubjectSchema.index({
  name: 'text',
  description: 'text'
});

var Subject = mongoose.model("Subject", SubjectSchema);

Subject.count(function(err, count){
  if ( count == 0) {
    console.log("Populating data");

    var mockData = require("../mocks/subjects");

    mockData.forEach(function(data){
      var k, subject = new Subject();
      for(k in data) {
        subject[k] = data[k];
      }

      subject.save();
    });
  }
});


