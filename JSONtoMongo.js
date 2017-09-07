'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js'),
    jsonfile = require('./listings.json');

/* Connect to your database */
//mongoose.connect('mongodb://matt:Kouichi3@ds129434.mlab.com:29434/cen3031_mavellanosa_assign3');

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://matt:Kouichi3@ds129434.mlab.com:29434/cen3031_mavellanosa_assign3',{useMongoClient: true});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */



//This for loop goes through all the entries in listings.json 
//and creates a mongoose model for each listing object, and 
//then it saves it into the Mongo database

for(var i=0; i<jsonfile.entries.length;i++){
  var entry = new Listing({
    code: jsonfile.entries[i].code,
    name: jsonfile.entries[i].name,
    coordinates: jsonfile.entries[i].coordinates,
    address: jsonfile.entries[i].address
  });


  entry.save(function(err){
  if (err) throw err;

  console.log('Listing has been saved');
  });

}



/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */