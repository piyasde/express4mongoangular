
var fs = require('fs')
  , Log = require('log')
  , log = new Log('debug', fs.createWriteStream('signofme.log'));

function checkBlankValue(variableName) {
	return variablename = (variableName=='' ||typeof variableName == 'undefined') ? 'Not yet entered':variableName; 	
}

function debugMessage(stream) {
	log.debug(stream);
}

function infoMessage(stream) {
	log.info(stream);
}

function errorMessage(stream) {
	log.error(stream);
}


module.exports.checkBlankValue = checkBlankValue;
module.exports.debugMessage = debugMessage;
module.exports.infoMessage = infoMessage;
module.exports.errorMessage = errorMessage;


