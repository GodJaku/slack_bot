var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var emptySchema= new Schema({building : String, room : String,
  mon1 : Number, mon2 : Number, mon3 : Number, mon4 : Number, mon5 : Number, mon6 : Number, mon7 : Number,
  tue1 : Number, tue2 : Number, tue3 : Number, tue4 : Number, tue5 : Number, tue6 : Number, tue7 : Number,
  wed1 : Number, wed2 : Number, wed3 : Number, wed4 : Number, wed5 : Number, wed6 : Number, wed7 : Number,
  thu1 : Number, thu2 : Number, thu3 : Number, thu4 : Number, thu5 : Number, thu6 : Number, thu7 : Number,
  fri1 : Number, fri2 : Number, fri3 : Number, fri4 : Number, fri5 : Number, fri6 : Number, fri7 : Number }, {collection: 'empty'});

module.exports= mongoose.model('empty', emptySchema);
