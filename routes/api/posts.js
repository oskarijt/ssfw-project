'use strict'

const mongodb = require('mongodb');     
const mongoose = require('mongoose');   
const multer = require('multer');       // file storing middleware
const express = require('express');
const sharp = require('sharp');

var app = require('../../index')

const router = express.Router();

var url ='mongodb://localhost:27017/week1'

/**
 * 
 * File storing/handling
 * 
 */

const Schema = mongoose.Schema;

const formSchema = new Schema({
    category: String,
    title: String,
    description: String,
    imagePath: String,
    thumbnailPath: String,
    coordinates: {
        latitude: String,
        longitude: String
    }
});
 
const model = mongoose.model('week1', formSchema);

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
  const posts = await loadPostsCollection();
  //res.send(await posts.find({}).toArray());
    model.find().then( all => {
        res.json(all);
    });
});

// Add Post
/*router.post('/',multer(multerConfig).single('photo'), async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    form: req.body.form,
  });
  res.status(201).send();
});
*/

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  console.log('no ainaki yritetää poistaa ehkä');
  console.log(req.params.id);
  model.findOneAndDelete({ _id: req.params.id }, (err, res) => {
    if(err) {
      console.log('Delete error: ' + err)
    }
  });
});


// Serve up file handling solutions

router.post('/upload',multer(multerConfig).single('photo'), async (req, res, next) => {
  const posts = await loadPostsCollection();
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
      coordinates: {
          latitude: body.latitude,
          longitude: body.longitude
      }
  };

  model.create(uploadSchema).then( () => {
      console.log('Upload complete!');
      res.json({ message: 'Complete!' });
    });
  });

async function loadPostsCollection() {
  /*const client = await mongodb.MongoClient.connect(
    url,
    {
      useNewUrlParser: true
    }
  );*/

  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/week1`, { useNewUrlParser: true }).then(() => {
    console.log('Connected successfully to db. (posts)');
    //app.listen(process.env.APP_PORT);
  }, err => {
    console.log('Connection to db failed: ' + err);
  });

  //return client.db('vue_express').collection('week1');
}

module.exports = router;