const multer = require('multer');       // file storing middleware
const express = require('express');
const router = express.Router();
const sharp = require('sharp');
const Reviews = require('../models/Post');


const multerConfig = {

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

/**
 * 
 *  ROUTES
 * 
 */

// Get Posts
router.get('/', async (req, res) => {
      Reviews.find().then( all => {
          res.json(all);
      });
  });
  
// Delete Post
router.delete('/:id', (req, res) => {
    Reviews.findOneAndDelete({ _id: req.params.id }, (err, res) => {
        if(err) {
        console.log('Delete error: ' + err)
        }
    });
});
  
  
// Post Post and handle file
router.post('/upload',multer(multerConfig).single('photo'), (req, res, next) => {
    console.log('päästäänkö tänne ' + req.file);
    next();
});
  
router.use('/upload', (req, res) => {
    const body = req.body;
    const file = req.file;
    const inputBuffer = file.path;
  
    const filePath = file.path.split("/").pop();
  
    console.log('Tiedosto');
    console.log(file);
  
    console.log('Sharp file.path: ' + file.path);
  
    sharp(req.file.path)
      .resize(400, 400)
      .toFile(file.destination + '/thumbnail/' + file.filename, (err, info) => { 
        if (err === !null) {
          console.log('Sharp error: ' + err);
        } else {
          console.log('Sharp should have worked');
        }
     });
    
    // construct the schema that gets sent to database
  
    const uploadSchema = {
        category: body.category,
        title: body.title,
        description: body.description,
        imagePath: '/photo-storage/' + filePath,
        thumbnailPath: '/photo-storage/thumbnail/' + filePath,
        author: req.user._id
    };
    
    Reviews.create(uploadSchema).then( () => {
        console.log('Upload complete!');
        res.json({ message: 'Complete!' });
    });
});

module.exports = router;