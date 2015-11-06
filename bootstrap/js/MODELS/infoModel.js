//namespace our model.
var app = app || {};

app.infoModel = Backbone.Model.extend({
	//validate our models' data.
	validate: function(attrs) {
		if(! $.trim(attrs.title) && ! $.trim(attrs.description) ) {
			return "blah blah blah";
		}
	},
	
	defaults: {
		title: "Diversity",
		description: "The true nature of human life",
	},


});

//create an instance of our model.
var model = new app.infoModel();

var modelOne = new app.infoModel({
	title: "Mango fruit.",
	description: "A very fine fruit & yummyyy!",
});

var modelTwo = new app.infoModel({
	title: "Pineapple fruit.",
	description: "I love pineapple juice due to its taste.",
});

var modelTen = new app.infoModel({
	title: "Oranges.",
	description: "They are really orange..",
});

/* console.log(modelOne.toJSON());
console.log(modelTwo.toJSON());
console.log(model.toJSON()); */