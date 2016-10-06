var slackTerminal = require('slack-terminalize');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/manewhana');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback () {
// 	console.log("mongo db connection OK.");
// });
//
// //db schema
// var testSchema = mongoose.Schema({
// 	building: String,
// room: String,
// mon1: String,
// mon2: String,
// mon3: String,
// mon4: String,
// mon5: String,
// mon6: String,
// mon7: String,
// tue1: String,
// tue2: String,
// tue3: String,
// tue4: String,
// tue5: String,
// tue6: String,
// tue7: String,
// wed1: String,
// wed2: String,
// wed3: String,
// wed4: String,
// wed5: String,
// wed6: String,
// wed7: String,
// thu1: String,
// thu2: String,
// thu3: String,
// thu4: String,
// thu5: String,
// thu6: String,
// thu7: String,
// fri1: String,
// fri2: String,
// fri3: String,
// fri4: String,
// fri5: String,
// fri6: String,
// fri7: String,
// });

//model
//var TestModel = mongoose.model("TestModel", testSchema);

//create instance
//var testIns = new TestModel({ builing: "testIns" });

//testIns.save(function(err, testIns){
//	if(err) return console.error(err);
//	testIns.speak();
//});

//TestModel.find(function(err, models){
//	if(err) return console.error(err);
//	console.log("find() - "+models);
//});

//TestModel.find({builing:/^testIns/});




slackTerminal.init('', {
    // slack rtm client options here
    // more info at: https://github.com/slackhq/node-slack-client/blob/master/lib/clients/rtm/client.js
}, {
    // app configurations to suit your project structure
    // to see the list of all possible config,
    // check this out: https://github.com/ggauravr/slack-terminalize/blob/master/util/config.js
	CONFIG_DIR: __dirname + '/config',
	COMMAND_DIR: __dirname + '/commands',
  ERROR_COMMAND: "error"
});
