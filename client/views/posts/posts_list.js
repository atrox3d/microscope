var postData = [
	{
      title: 'Introducing Telescope',
      author: 'Sacha Greif',
      url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
      title: 'Meteor',
      author: 'Tom Coleman',
      url: 'http://meteor.com'
    },
    {
      title: 'The Meteor Book',
      author: 'Tom Coleman',
      url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers(
	{
		// funziona anche come return di funzione
		//posts: function() {return postData;}
		posts: postData
	}
);