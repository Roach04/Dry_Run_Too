//namespace our view
var app = app || {};

app.singleView = Backbone.View.extend({
	tagName: "li",
	template: _.template($("#assets").html()),

	events: {
		"click .edit": "editTask",
		"click .erase": "destroyInfo"
	},

	//we need to update our view once our model has been updated.
	//to do this, we need the initialization method so as to set our event and re render our view.
	initialize: function() {
		this.model.on("change", this.render, this);

		//we need to update our view accordingly when an element is deleted.
		this.model.on("destroy", this.remove, this);
	},

	//lets render our li template
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	//define your event handler.
	editTask: function() {
		//prompt the user and also display the title that exists
		var changeTask = prompt("What would like to change the title to?", this.model.get("title"));

		//if the user is not interested in making changes and click on the cancel button, then the info should remain the same.
		if(! changeTask) return;

		//then i need to update my model accordingly.
		this.model.set("title", changeTask);

		var changeDess = prompt("What would like to change the description to?", this.model.get("description")); 
		
		if(! changeDess) return;

		//then i need to update my model accordingly.
		this.model.set("description", changeDess);

	},

	//destroy info event handler
	destroyInfo: function() {
		var tt = this.model.get("title");
		var dd = this.model.get("description");

		//we can prompt the user first b4 deleting anything.
		alert("are you sure you want to delete " + tt + " plus " + dd );

		//below code ensures that when our button is clicked, our li element is deleted/destroyed.
		this.model.destroy();
		console.log(infocollect.toJSON());
	},

	//we need to define our remove method.
	remove: function() {
		this.$el.remove();
	},
});

//we need to pass our model to this view.
var passModel = new app.infoModel();

// we then instantiate our view and pass our model to it.
var singleview = new app.singleView({
	model: passModel
});

//now to display our li view,
/* $("#contain").html(singleview.render().$el); */