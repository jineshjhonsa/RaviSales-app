var mongoose = require('mongoose');

var folderschema = new mongoose.Schema({
   
  	time: String,		
	contact_name: String,
	party_address: String,
	party_number:String,
	party_name: String,
	party_comment: String,
	day_closed:String,
	total_folder: String,
	folder_name: String,
	location:String,
	google_address:String
});




mongoose.model("folderdat",folderschema);

