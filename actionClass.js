var request = require('request');

function Action(actionPath, payload) {
	this.actionPath = 'http://test@liferay.com:test@localhost:8080/api/jsonws' + actionPath;
	this.payload = payload;
}

Action.prototype.doAction = function(callback) {
	var payload = this.payload;

	try {
		if (!payload) {
			throw new Error('Missing payload object');
		}
		if (!callback) {
			throw new Error('Missing callback function');
		}
		request.post(
			{
				url: this.actionPath,
				form: payload
			},
			function(error, response, body) {
				if (!error && (response.statusCode == 200)) {
					callback(null, body);
				}
				else {
					console.error('STATUS CODE: ', response.statusCode);
					console.error('ERROR: ', error);
					callback(error);
				}
			}
		);
	}
	catch(e) {
		console.error(e);
	}
}

module.exports = Action;