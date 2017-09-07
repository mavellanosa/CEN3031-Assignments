/* Fill out these functions using Mongoose queries*/

//Required vars to connect to the database to perform the queries
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    jsonfile = require('./listings.json');

    mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://matt:Kouichi3@ds129434.mlab.com:29434/cen3031_mavellanosa_assign3',{useMongoClient: true});


var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.find({code: 'LBW'}, function(err, List){
    if (err) throw err;

    console.log(List);
   });


};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({code: 'CABL'}, function(err){
    if (err) throw err;

    console.log('Deleted CABL entry');
   });


};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */


   Listing.findOneAndUpdate({code: 'PHL' }, {address: 'Phelps Lab, Gainesville, FL 32603'}, function(err, list){
    if (err) throw err;

    console.log(List);
   });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({}, function(err,List){
    if (err) throw err;

    console.log(List);
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();


