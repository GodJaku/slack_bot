var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var subwaySchema= new Schema({﻿urlID : Number, station : String,
                              line : Number, resultID : Number }, {collection: 'subway'});

module.exports= mongoose.model('subway', subwaySchema);
