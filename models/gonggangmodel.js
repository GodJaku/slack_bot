var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var gonggangSchema= new Schema({username: String, timetable: String }, {collection: 'gonggang'});

module.exports= mongoose.model('gonggang', gonggangSchema);
