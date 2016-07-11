var mongoose = require('mongoose');

mongoose.connect('mongodb://<username>:<password>@ds017155.mlab.com:17155/pandorasbox');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  responses: [{
    question: String,
    response: String,
    votes: Number
  }]
});

var questionSchema = mongoose.Schema({
  question: String,
  responses: {
    responseID: {
      text: String,
      votes: Number
    }
  }
});

var User = mongoose.model('User', userSchema);
  
var Question = mongoose.model('Question', questionSchema);

module.exports = {
  User: User,
  Question: Question
};