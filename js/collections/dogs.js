Dogs = Backbone.Collection.extend ({

	initialize: function () {
		this.view = new DogsIndexView({collection: this}); //create new view when instance is called
	},

	model: Dog

});