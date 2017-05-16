var express = require('express');


var router = express.Router();

var mongoose = require( 'mongoose' );
var Newfolder = mongoose.model('z');

//api for all posts
router.route('/folder')

    //create a new post
     //creates a new post
    .post(function(req, res){

        var newfold = new Newfolder({
           time: req.body.time,        
        contact_name: req.body.contact_name,
        party_address: req.body.party_address,
        party_number:req.body.party_number,
        party_name: req.body.party_name,
        party_comment: req.body.party_comment,
        day_closed:req.body.day_closed,
        total_folder: req.body.total_folder,
        folder_name: req.body.folder_name,
        location:req.body.location,
        google_address:req.body.google_address 
        });

        newfold.save(function(err) {
  if (err) console.log(err);

  console.log('User created!');
});
     
    })
 //gets all posts
    .get(function(req, res){
        Newfolder.find({ }, function(err, user) {
  if(err){
          return res.send(500, err);
        }
            return res.send(user);
});

    });



module.exports = router;