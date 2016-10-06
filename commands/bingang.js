var request = require('request'),
    util    = require('../util'),
    mongoose= require('mongoose'),
    empty   = require('../models/empty.js');

module.exports = function (param) {
  if(param.args.length < 2){
    util.postMessage(param.channel, "Input Error");
    return ;
  }
  if(mongoose.connection.readyState == 0) mongoose.connect('mongodb://localhost/godjaku');

  var channel = param.channel;
  var Schema= mongoose.Schema;
  empty.find({"building":param.args[1], [param.args[0]]:0}, function(err, docs){
    var temp= "";
    for(var i in docs){
      temp= temp + docs[i].room+"\t";
      if(i%5 == 4) temp += "\n";
    }
    util.postMessage(channel, temp);
  });
};
