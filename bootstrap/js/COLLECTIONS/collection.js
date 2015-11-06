//namespace our collection.
app = app || {};

app.InfoCollect = Backbone.Collection.extend({
	//pass in our model.
	model: app.infoModel
});

//instantiate our collection.
var infocollect = new app.InfoCollect([ 
	model, modelOne, modelTwo, modelTen,
	{
		title: "banana",
		description: "sweeety sweeety bananaaa...."
	},

	{
		title: "Avocado",
		description: "Very fruity vegetables."
	}

]);

/* console.log(infocollect.toJSON()); */