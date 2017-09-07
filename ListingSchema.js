/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;



/* Create your schema */
var listingSchema = new Schema({

	//Schema based on the formatting of the entries in listings.json
	code: {type: String, required: true},
	name: {type: String, required: true},
	coordinates: {
		latitude: Number,
		longitude: Number
	},
	Address: String,
	updated_at: Date,
	created_at: Date

  /* your code here */
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {



	//retrieve the current date
	var currDate = new Date();

	//update the updated_at field to the current date
	this.updated_at = currDate;

	//If created_at isn't already filled in, add the current date to that field
	if(!this.created_at){
		this.created_at = currDate;
	}

	next();
  /* your code here */
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
