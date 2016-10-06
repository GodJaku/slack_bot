var request = require('request'),
    util    = require('../util'),
    cheerio = require('cheerio'),
    parse   = require('url-parse'),
    mongoose= require('mongoose'),
    subway  = require('../models/subwaymodel'),
    http    = require('http');

var getid= function(d){
  d= d.toString().substring(12, d.toString().length-2);
  while(d.length < 4) d= '0'+d;
  return d;
};

module.exports = function (param) {
  if(param.args.length < 2){
    util.postMessage(param.channel, "Input Error");
    return ;
  }
  if(mongoose.connection.readyState == 0) mongoose.connect('mongodb://localhost/godjaku');
  subway.find({"station":{$in:[param.args[0], param.args[1]]}}, {_id:false, station:false, line:false, resultid:false}, function(err, data){
    url= "https://www.smrt.co.kr/program/cyberStation/main.jsp?sname2="+param.args[0]+"&stcd2="+getid(data[0])+"&sname3="+param.args[1]+"&stcd3="+getid(data[1]);
    console.log(url);
    request(url, {timeout: 1000000, headers:{'user-agent': "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36", 'Content-Type': 'application/x-www-form-urlencoded'}}, function(err, res, b){
    // request.get({url: url}, function(err, res, b){
      var result= "";
      if (!err && res.statusCode == 200) {
        result= b;
      } else {
        result= "지하철 정보를 찾을 수 없습니다";
      }
      util.postMessage(param.channel, result);
    });
    // http.get({host:url, port:8888, 'Content-Type': 'application/x-www-form-urlencoded'}, function(res){
    //   res.on('data', function(b){
    //     util.postMessage(param.channel, b);
    //   });
    // }).on('error', function(e){ util.postMessage(param.channel, "지하철 정보를 찾을 수 없습니다."); });
  });
};
