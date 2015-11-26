Security = new Meteor.Collection('security');

// Security.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	},
// 	remove: function(userId, doc) {
// 		return !!userId;
// 	}
// });

Meteor.methods({
	security_insert: function() {
		var securityId = Security.insert({test:'test'});
		return securityId;
	},
	security_remove: function(id) {
		Security.remove(id);
	}
});