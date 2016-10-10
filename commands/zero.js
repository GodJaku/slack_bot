var request = require('request'),
  util = require('../util'),
  mongoose = require('mongoose'),
  gonggang = require('../models/gonggangmodel.js');

module.exports = function (param) {

        if (mongoose.connection.readyState == 0) mongoose.connect('mongodb://localhost/manewhana');

        gonggang.find (function(err, models){
                
                var timetable1 = new Array(7);
                var timetable2 = new Array(7);
                var timetable3 = new Array(7);
                var timetable4 = new Array(7);
                var timetable5 = new Array(7);
                for (var i = 0; i < 7; i++){
                        timetable1[i] = 0;
                        timetable2[i] = 0;
                        timetable3[i] = 0;
                        timetable4[i] = 0;
                        timetable5[i] = 0;
                } 
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
                        for (var m in day[1]){
                                for (var n = 0; n <= 6; n++){
                                        if (day[1][m] == n+1)
                                                timetable2[n] = 1;
                                        else continue;
                                }
                        }
                        for (var m in day[2]){
                                for (var n = 0; n <= 6; n++){
                                        if (day[2][m] == n+1)
                                                timetable3[n] = 1;
                                        else continue;
                                }
                        }
                        for (var m in day[3]){
                                for (var n = 0; n <= 6; n++){
                                        if (day[3][m] == n+1)
                                                timetable4[n] = 1;
                                        else continue;
                                }
                        }
                        for (var m in day[4]){
                                for (var n = 0; n <= 6; n++){
                                        if (day[4][m] == n+1)
                                                timetable5[n] = 1;
                                        else continue;
                                }
                        }
                }

                var result = "";
                for (var i = 0; i < 7; i++){
                    if (timetable1[i] == 0) {
                        result = result + "Mon" + (i+1) + "\t";
                        if (i == 6)
                            result = result + "\n";
                    } 
                }
		//result += "\n";
                for (var i = 0; i < 7; i++){
                    if (timetable2[i] == 0) {
                        result = result + "Tue" + (i+1) + "\t";
                        if (i == 6)
                            result = result + "\n";
                    } 
                }
                //result += "\n";
                for (var i = 0; i < 7; i++){
                    if (timetable3[i] == 0) {
                        result = result + "Wed" + (i+1) + "\t";
                        if (i == 6)
                            result = result + "\n";
                    } 
                }
                //result += "\n";
                for (var i = 0; i < 7; i++){
                    if (timetable4[i] == 0) {
                        result = result + "Thu" + (i+1) + "\t";
                        if (i == 6)
                            result = result + "\n";
                    } 
                }
                //result += "\n";
                for (var i = 0; i < 7; i++){
                    if (timetable5[i] == 0) {
                        result = result + "Fri" + (i+1) + "\t";
                        if (i == 6)
                            result = result + "\n";
                    } 
                }
          
          util.postMessage(param.channel, result);
      });
};

                                   
