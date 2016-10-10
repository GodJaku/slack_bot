var request = require('request'),
  util = require('../util'),
  mongoose = require('mongoose'),
  gonggang = require('../models/gonggangmodel.js');

module.exports = function (param) {
	
        if (mongoose.connection.readyState == 0) mongoose.connect('mongodb://localhost/manewhana');

	gonggang.find (function(err, models){
		/*var timetable = new Array(5);
		for (var i in timetable){
			timetable[i] = new Array(7);
			for (var j in timetable[i])
				timetable[i][j] = 'x';
		}*/
                var timetable1 = new Array(7);
                var timetable2 = new Array(7);
                var timetable3 = new Array(7);
                var timetable4 = new Array(7);
                var timetable5 = new Array(7);
		var day = new Array(5);
                for (var i = 0; i < 5; i++){
                        day[i] = new Array();
                }

		for (var i in models){
			var temp =  models[i].timetable.split(' ');
			
                        for (var j = temp.length-1; j > 0; j--){
				if (temp[j-1] == 'mon'){
					day[0] = temp[j].split(',');
				} else if (temp[j-1] == 'tue'){
					day[1] = temp[j].split(',');
				} else if (temp[j-1] == 'wed'){
					day[2] = temp[j].split(',');
				} else if (temp[j-1] == 'thu'){
					day[3] = temp[j].split(',');
				} else if (temp[j-1] == 'fri'){
					day[4] = temp[j].split(',');
		                }
			}
		       	for (var m in day[0]){
				for (var n = 0; n <= 6; n++){
					if (day[0][m] == n+1)
						timetable1[n] = 1;
                                        else continue;
				}
			}
			/*for (var m in day[1]){
				for (var n =1; n <= 7; n++){
					if (day[1][m] == n)
						timetable[1][n-1] = 1;
				}
			}
			for (var m in day[2]){
				for (var n =1; n <= 7; n++){
					if (day[0][m] == n)
						timetable[2][n-1] = 1;
				}
			}
			for (var m in day[3]){
				for (var n =1; n <= 7; n++){
					if (day[0][m] == n)
						timetable[3][n-1] = 1;
				}
			}
			for (var m in day[4]){
				for (var n =1; n <= 7; n++){
					if (day[0][m] == n)
						timetable[4][n-1] = '1';
				}
			}*/
		        //for (var j in day[0])
                        //util.postMessage(param.channel, timetable1);
                }
                //util.postMessage(param.channel, "error3");
		/*var result = "";
		for (var i = 0; i < 5; i++){
			for (var j = 0; j <7; j++){
				if (i == 0 && timetable[i][j] == 0){
					result = result + "Mon" + j + "\t";
					if (j ==7){
						result = result + "\n";
					}
				} else if(i == 1 && timetable[i][[j] == 0]){
					result = result + "Tue" + j + "\t";
					if (j ==7){
						result = result + "\n";
					}
				} else if (i ==2 && timetable[i][j] == 0){
					result = result + "Wed" + j + "\t";
					if (j ==7){
						result = result + "\n";
					}
				} else if (i ==3 && timetable[i][j] == 0){
					result = result + "Thu" + j + "\t";
					if (j ==7){
						result = result + "\n";
					}
				} else if (i==4 && timetable[i][j] == 0){
					result = result + "Fri" + j + "\t";
					if (j ==7){
						result = result + "\n";
					}
				}
			}
		}*/
		util.postMessage(param.channel, timetable1);
	});
};
