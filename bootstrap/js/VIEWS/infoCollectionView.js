//namespace my collection view
app = app || {};

app.infoCollectionView = Backbone.View.extend({
	tagName: "ul",

	//add the initialization method.
	initialize: function() {
		this.collection.on("add", this.addTwo, this);
	},

	render: function() {
		//create a loop but pass only a function to it.
		this.collection.each(this.addTwo, this);
		return this;
	},

	//lets define our function.
	addTwo: function(passModel) {
		//we create an instance of our collection view and pass our model to it.
		var infoview = new app.singleView({ model: passModel});

		//finally we render and append our collection view.
		this.$el.append(infoview.render().el);
	}
});

//create an instance of our collection view and pass our collection to it.
var infoCollection = new app.infoCollectionView({ collection: infocollect});
/* console.log(infoCollection.render().el); */

//now to display our li view,
$("#contain").html(infoCollection.render().$el); 