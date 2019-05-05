const multer = require('multer');       // file storing middleware
const sharp = require('sharp');
const Reviews = require('../models/Post');

module.exports.myPosts = (req, res) => {
    Reviews.find({
        author: req.userData.id
    }).then( all => {
        res.json(all);
    });
}

module.exports.getPosts = (req, res) => {
    Reviews.find().then( all => {
        res.json(all);
    });
}

module.exports.uploadPost = (req, res) => {

    const body = req.body;
    const file = req.file;
    const inputBuffer = file.path;
    const filePath = file.path.split("/").pop();
  
    sharp(inputBuffer)
      .resize(400, 400)
      .toFile(file.destination + '/thumbnail/' + file.filename, (err, info) => { 
        if (err === !null) {
          console.log('Sharp error: ' + err);
        }
     });
    
    // construct the schema that gets sent to database
    const uploadSchema = {
        author: body.author,
        category: body.category,
        title: body.title,
        description: body.description,
        rating: body.rating,
        imagePath: '/photo-storage/' + filePath,
        thumbnailPath: '/photo-storage/thumbnail/' + filePath,
    };
    
    Reviews.create(uploadSchema).then( () => {
        console.log('Upload complete!');
        res.json({ message: 'Upload complete!' });
    });
}

module.exports.deletePost = (req,res) => {

    Reviews.findOneAndDelete({ 
        _id: req.params.id, 
        author: req.userData.id
     }, (err) => {
        if(err) {
        console.log('Delete error: ' + err)
        } else {
            res.json({ message: 'Review deleted!' });
        }
    });
}

module.exports.multerConfig = {

    storage: multer.diskStorage({

        //Setup where the user's file will go
        destination: (req, file, next) => {
            next(null, 'dist/photo-storage');
        },

        //Then give the file a unique name
        filename: (req, file, next) => {
            console.log('Inside multer ' + file);
            const ext = file.mimetype.split('/')[1];
            next(null, file.fieldname + '-' + Date.now() + '.' + ext);
        },
    }),

    //A means of ensuring only images are uploaded
    fileFilter: (req, file, next) => {
        if (!file) {
            next();
        }
        const image = file.mimetype.startsWith('image/');

        if (image) {
            console.log('image received');
            next(null, true);
        } else {
            console.log('file not supported');

            //TODO: A better message response to user on failure
            return next();
        }
    }
};