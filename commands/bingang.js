var request = require('request'),
    util    = require('../util'),
    mongoose= require('mongoose'),
    empty   = require('../models/empty.js');

module.exports = function (param) {
  if(param.args.length < 2){
    util.postMessage(param.channel, "Input Error");
    return ;
  }
  if(mongoose.connection.readyState == 0) mongoose.connect('mongodb://localhost/manewhana');

  var channel = param.channel;
  var Schema= mongoose.Schema;
  var time= param.args[0];
  empty.find({"building":param.args[1], [time]:0}, function(err, docs){
    var temp= "";
    var ii=0;
    var mon="";
    for(var i in docs){
      temp= temp + docs[i].room+"\t";
      if(i%5 == 4) temp += "\n";
    }
    for(ii=1; ii<8; ii++){
       
        if(param.args[0] == "mon1") mon[ii]="hehe";
//"월요일 "+ii+"교시";
    }
    util.postMessage(channel, mon[ii]+"에 비어있는 강의실:\n"+ temp);
  });
};
