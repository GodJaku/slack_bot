var request = require('request'),
    util    = require('../util');

var findClass= function(day, building){
  var response= "```";
  var mongoose= require('mongoose');
  mongoose.connect('mongodb://localhost/godjaku');

  var Schema= mongoose.Schema;
  var emptySchema= new Schema({ "_id" : mongoose.ObjectId, "building" : String, "room" : String,
    "mon1" : int, "mon2" : int, "mon3" : int, "mon4" : int, "mon5" : int, "mon6" : int, "mon7" : int,
    "tue1" : int, "tue2" : int, "tue3" : int, "tue4" : int, "tue5" : int, "tue6" : int, "tue7" : int,
    "wed1" : int, "wed2" : int, "wed3" : int, "wed4" : int, "wed5" : int, "wed6" : int, "wed7" : int,
    "thu1" : int, "thu2" : int, "thu3" : int, "thu4" : int, "thu5" : int, "thu6" : int, "thu7" : int,
    "fri1" : int, "fri2" : int, "fri3" : int, "fri4" : int, "fri5" : int, "fri6" : int, "fri7" : int }, {collection: 'empty'})
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
