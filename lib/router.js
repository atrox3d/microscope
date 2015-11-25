Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('postsList', {path:'/'});

Router.route('postPage', {
	path:'/posts/:_id',
	data: function () {
		return Posts.findOne(this.params._id);
	}
});

Router.route('postSubmit', {
	path: '/submit',
	// where: 'server'
})

var requireLogin = function(pause) {
	var self = this;
	var next = this.next;

	if (! Meteor.user()) {
	    this.render('accessDenied');
	} else {
		Security.insert({test:'test'}, function(error, result) {
			if(error) {
				self.render('accessDenied');
			} else {
				next();
			}
		})
	}
	// if (! Meteor.user()) {
	// // if (! this.userId) {
	//   this.render('accessDenied');
	// } else {
	//   this.next();
	// }
}

Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only:'postSubmit'});
