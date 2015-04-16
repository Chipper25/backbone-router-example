Router = Backbone.Router.extend({

	routes: {
		'dogs/create': 'create',
		'dogs/:id/update': 'update',
		'dogs/:id/destroy': 'destroy',
		'dogs/:id': 'show',
		'dogs': 'index',
		'': 'index'
	},

	showView: function (view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		$('main').html(this.currentView.render());
	},

	create: function () {
		var dog = new Dog();
		var id = dogs.length;
		dogs.add(dog);
		router.navigate('dogs/'+id+'/update', {trigger: true});
	},

	update: function (id) {
		var dog = dogs.at(id);
		dog.editView = new DogEditView({model: dog});
		this.showView(dog.editView);
	},

	destroy: function (id) {
		var dog = dogs.at(id);
		if (window.confirm("Do you really want to destroy this dog?")) {
			dog.destroy();
		}
		router.navigate('dogs', {trigger: true});
	},

	show: function (id) {
		var dog = dogs.at(id);
		dog.view = new DogShowView({model:dog});
		this.showView(dog.view);
	},

	index: function () {
		this.showView(dogs.view);
	}



})