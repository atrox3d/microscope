Template.postSubmit.events({
	'submit form' : function (e) {
		e.preventDefault();

		var post = {
			// url: e.target.url.value
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			// url: $(e.target).find('[name=url').val(),
		}

		post._id = Posts.insert(post);
		Router.go('postPage', post);
	}
});