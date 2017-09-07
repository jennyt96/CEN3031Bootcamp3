/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Listing.findOne({ 'name': 'Library West' }, function (err, listing) {
    if (err) throw err;
    console.log(listing.name);
    console.log(listing.code);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOneAndRemove({'code': 'CABL'}, function(err, listing) {
    console.log(listing);
  });
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({ 'code': 'PHL' }, { 'address': 'Phelps Lab, Gainesville, FL 32603' }, function(err, listing) {
    if (err) throw err;

    // we have the updated user returned to us
    console.log(listing);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Listing.find({}, function(err, listings) {
    if (err) throw err;

    listings.forEach(function(blah) {
      console.log(blah);
    })
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
