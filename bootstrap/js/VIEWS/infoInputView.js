//namespace our view.
app = app || {};

app.InputView = Backbone.View.extend({
	el: "#form",
	events: {
		"submit" : "submit"
	},

	submit: function(e) {
		//below code is to prevent the page from posting itself
		e.preventDefault();
		var inputOne = $(e.currentTarget).find("input[type=text]").val();
		var inputTwo = $(e.currentTarget).find("input[type=longtext]").val();

		//now lets create an instance of our model and pass our new parameters in.
		var one = new app.infoModel({
			title: inputOne,
			description: inputTwo
		});
		this.collection.add(one);
	}
});

//create an instance of our view and pass our collection to it.
var inputview = new app.InputView({ collection: infocollect});

