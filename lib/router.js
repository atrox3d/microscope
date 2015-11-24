Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.onBeforeAction('loading');

Router.route('postsList', {path:'/'});

Router.route('postPage', {
	path:'/posts/:_id',
	data: function () {
		return Posts.findOne(this.params._id);
	}
});

