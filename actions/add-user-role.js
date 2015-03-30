var Action = require('../actionClass');

module.exports = function(userId, roleIds, callback) {
	var userRole = {
		userId: userId,
		roleIds: JSON.stringify(roleIds)
	};

	var action = new Action('/role/add-user-roles', userRole);

	action.doAction(callback);

}