var request = require('request'),
  util = require('../util'),
  mongoose = require('mongoose'),
  gonggang = require('../models/gonggangmodel.js');

module.exports = function (param) {
	if (param.args.length<2) {
		util.postMessage(param.channel, "명령어 오류입니다. 다시 확인하고 입력해주세요.");
		return;
	}
	if (mongoose.connection.readyState == 0)
		mongoose.connect('mongodb://localhost/manewhana');
	//console.log("username "+param.user);
	//이거 왜 필요..? 쿼리 find용인듯함 근데 안씀
	//var query = {};
	//query["username"] = param.user;
	var timetable_string = "";
	for (var i in param.args) {
		console.log(i + " " + param.args[i]);
		timetable_string = timetable_string + param.args[i] + " ";
	}

	//  save timetable into DB
	gonggang.find({username: param.user}, function (err, models){
		if (err) console.log("error1");

		if (!models || models.length == 0) { //new user
			console.log("no user");
			var user = new gonggang ({
			username: param.user,
			timetable: timetable_string
		            });
		            user.save(function(err, models){
		            	if (err) console.log ("error2");
		                        util.postMessage(param.channel, 'saved your Timetable');
		            });
		} else { // user already exists
			gonggang.update({username: param.user}, {$set: {timetable: timetable_string}}, function (err, models) {
				if (err) console.log ("error3");
				util.postMessage(param.channel, 'updated your Timetable');
			});
		}
	});

	/*if (zero.find({username: param.user})) {
		zero.update({username: param.user}, {$timetable: {timetable: timetable_string}},  function (err, models) {
			if (err) throw err;
			util.postMessage(param.channel, 'updated your Timetable');//data update
	            });
	} else { //null 일경우
		var user = new zero ({
			username: param.user,
			timetable: timetable_string
		});
		user.save(function(err, models){
			if (err) console.log ("error");
		            util.postMessage(param.channel, 'saved your Timetable');
		});
	}*/

	/*zero.find({username:param.user}, function(err, models){
		if (err) return console.error(err);
		console.log("find() - " + models);

	}); */ 
	

};
