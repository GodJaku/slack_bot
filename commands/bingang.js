var request = require('request'),
        util    = require('../util');

module.exports = function (param) {
        var channel = param.channel;
            //endpoint = param.commandConfig.endpoint.replace('{gem}', param.args[0]);
        var input_classtime = param.args[0];
        var input_builing = param.args[1];
        var result = db.empty.find({"builing": /^input_building/, /^input_classtime/: "0"});
        for(i in result){
        	//result의 room들만 출력
        }
        var info = [];

        request(endpoint, function (err, response, body) {

                var info = [];

                if (!err && response.statusCode === 200) {
                        body = JSON.parse(body);

                        info.push('Gem: ' + body.name + ' - ' + body.info);
                        info.push('Authors: ' + body.authors);
                        info.push('Project URI: ' + body.project_uri);
                }
                else {
                        info = ['No such gem found!'];
                }
                util.postMessage(param.channel, info.join('\n\n'));
        });

        info = 
        util.postMessage(param.channel, info.join('\n\n'));

};
