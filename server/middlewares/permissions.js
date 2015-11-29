'use strict';
module.exports = function  (req, res, next) {
	// body...
	if(req.user){
		return next();
	} else {
		return res.sendStatus(401);
	}
}