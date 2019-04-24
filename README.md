# client

## Project setup
```
In /frontend and root run this

$ npm install
```

### Frontend setup
```
Use the first one when building for local use

$ npm run build -- --mode development
$ npm run build

After it has created dist folder into root, create these into dist
(Maybe i should have a script that does this after npm build?)
dist/photo-storage/
dist/photo-storage/thumbnail
```

```
Frontend can be viewed from different port than backend but all functionality is limited
$ npm run serve
```

### Backend setup
```
Backend is easier, after npm install you can just

$ node index.js

It starts the server and runs the frontend built in /dist
```

