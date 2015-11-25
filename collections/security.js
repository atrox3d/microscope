Security = new Meteor.Collection('security');

Security.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	remove: function(userId, doc) {
		return !!userId;
	}
});
