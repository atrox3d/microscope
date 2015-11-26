Template.postSubmit.events({
	'submit form' : function (e) {
		e.preventDefault();

		var post = {
			// url: e.target.url.value
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			// url: $(e.target).find('[name=url').val(),
		}

		Meteor.call('post', post, function (error, id) {
			if(error) {
				return alert(error.reason);
			}

			// Router.go('postPage', {_id: id});
			// Router.go('postsList');
		});
		Router.go('postsList');
		// post._id = Posts.insert(post);
	}
});