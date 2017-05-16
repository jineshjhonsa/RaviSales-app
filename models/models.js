var mongoose = require('mongoose');

var locationschema = new mongoose.Schema({
   
  	time: String,		
	contact_name: String,
	party_address: String,
	location:String,
	google_address:String
});

mongoose.model("location_data",locationschema);

