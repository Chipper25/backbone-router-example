var dogs = new Dogs(); // create a new dogs collection
var router = new Router();  //create new Router to handle routes.
Backbone.history.start();  //start tracking routes history
router.navigate('dogs');  //start our app at the #dogs route by default.



