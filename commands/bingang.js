var request = require('request'),
    util    = require('../util');

var findClass= function(day, building){
  var response= "```";
  var mongoose= require('mongoose');
  mongoose.connect('mongodb://localhost/godjaku');

  var Schema= mongoose.Schema;
  var emptySchema= new Schema({ "_id" : mongoose.ObjectId, "building" : String, "room" : String,
    "mon1" : Integer, "mon2" : Integer, "mon3" : Integer, "mon4" : Integer, "mon5" : Integer, "mon6" : Integer, "mon7" : Integer,
    "tue1" : Integer, "tue2" : Integer, "tue3" : Integer, "tue4" : Integer, "tue5" : Integer, "tue6" : Integer, "tue7" : Integer,
    "wed1" : Integer, "wed2" : Integer, "wed3" : Integer, "wed4" : Integer, "wed5" : Integer, "wed6" : Integer, "wed7" : Integer,
    "thu1" : Integer, "thu2" : Integer, "thu3" : Integer, "thu4" : Integer, "thu5" : Integer, "thu6" : Integer, "thu7" : Integer,
    "fri1" : Integer, "fri2" : Integer, "fri3" : Integer, "fri4" : Integer, "fri5" : Integer, "fri6" : Integer, "fri7" : Integer }, {collection: 'empty'})
  var db= mongoose.connection;
  var empty= mongoose.model('empty', emptySchema);
  empty.find({"building":building, day:0}, function(err, docs){
    docs.forEach(function(data){
      response += (data.room+"\n");
    });
    response.join("```");
  });
  return response;
}


module.exports = function (param) {
  var channel = param.channel;
  if(param.args.length < 2){
    util.postMessage(param.channel, "Input Error");
    return ;
  }
  var input_classtime = param.args[0];
  var input_building = param.args[1];
  var response= findClass(input_classtime, input_building);

  util.postMessage(channel, response);
};
