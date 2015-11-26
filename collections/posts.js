Posts = new Meteor.Collection('posts');

// Posts.allow({
// 	insert: function(userId, doc) {
// 		return !!userId;
// 	}
// });
//

Meteor.methods({
	post: function(postAttributes) {
		console.log('postAttributes', postAttributes);
		var user = Meteor.user(),
		postWithSameLink = Posts.findOne({url: postAttributes.url});

		if(!user) {
			throw new Meteor.Error(401, "you need to login to post stories");
		}

		if(!postAttributes.title) {
			throw new Meteor.Error(422, "please fill a headline");
		}

		if(postAttributes.url && postWithSameLink) {
			throw new Meteor.Error(302, "This link has already been posted", postWithSameLink._id);
		}

		var post = _.extend(_.pick(postAttributes, 'url', 'message'), {
			title: postAttributes.title + (this.isSimulation ? '(client)' : '(server)'),
			userId: user._id,
			author: user.username,
			submitted: new Date().getTime(),
		});

		// wait for 5 seconds
	    if (! this.isSimulation) {
	      var Future = Npm.require('fibers/future');
	      var future = new Future();
	      Meteor.setTimeout(function() {
	        future.return();
	      }, 5 * 1000);
	      future.wait();
	    }

		console.log(post);
		var postId = Posts.insert(post);
		console.log("exiting");
		return postId;
	}
});