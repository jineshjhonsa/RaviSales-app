<h1>Angular Node File Upload</h1>
<form ng-controller="MyCtrl as up">
  Hi This is new way to upload
  <input type='file' ngf-select ng-model="picFile"  >
  <button type="submit" ng-click="up.submit()">submit</button>
</form>

var item = mongoose.model('items');

var s3 = require('s3fs');
var s3fsimpl = new s3("testjinesh123",{
    accessKeyId: 'AKIAIOQJQKH2YAU2D5JA',
    secretAccessKey:'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'
});
//s3fsimpl.create();

var multiparty = require('connect-multiparty');
var middlewaremulti = multiparty;

var fs = require('fs');

router.post('/image',function(req,res){
    console.log(JSON.stringify(req.files));
            var file = req.files;
            console.log("file",JSON.stringify(file))
            console.log("original name:- "+file.fileUpload.originalFilename);
            console.log("Path:- ",file.fileUpload.path);
            var stream = fs.createReadStream(file.fileUpload.path);
            return s3fsimpl.writeFile(file.fileUpload.originalFilename, stream).then(function(){
                fs.unlink(file.fileUpload.path, function(err){
                    console.error(err);
                })
                console.log("Sucessfully uploaded to Amazon S3 server");
            });

});


router.route('/postimage')
.post(function(req,res){
    console.log(req.body.headers);
 var newItem = new item();
 newItem.img.data = req.body.data;
 newItem.img.contentType = 'image/png';
 newItem.save();
})
.get(function(req, res){
        item.findById("57d3dd55ceb33b5c0ebd888",function(err, doc){
            if(err){
                return res.send(500, err);
            }
            console.log(doc);
             res.contentType(doc[0].img.contentType);
          var base64 = (doc[0].img.data.toString('base64'));
         res.send(base64); 
        });
    });

var Item = new mongoose.Schema(
  {
     img: { data: Buffer, contentType: String }
     
  }
);

    mongoose.model("items",Item);

    router.use(middlewaremulti);