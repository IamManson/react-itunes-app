//import Express module library
const express = require('express');

//import File System module
const fs = require('fs');

//import Cors, Morgan, helmet and node-fetch module libraries
const cors = require('cors');
const morgan = require('morgan');
const helmet = require("helmet");
const fetch = require('node-fetch');

//Initialize Express
const app = express();

//App Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "script-src": ["'self'", "'unsafe-inline'", "http://localhost:3001", "https://itunes.apple.com"],
          "imgSrc": ["'self'", "http://localhost:3001", "https://itunes.apple.com"],
        },
      },
    })
  );
app.use(morgan('dev'));

//Body Parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Parsing the data received from webProjects.json
const favourites = JSON.parse(fs.readFileSync('./myFavourites.json'));

//GET function for myFavourties.json file
app.get('/api/myFavourites', (req, res) => { 
    res.json(favourites);
});

//GET function that fetches iTunes search.
app.get('/api/search/:term/:media', (req, res) => {
    const { term, media } = req.params;
    //Making the API call with the parameter keys being term and media, and limit of 50.
    fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=50`)
        .then(res => res.json())
        .then(data => res.send(data))
        .catch(err => console.log(err))
})

//POST 
app.post('/api/myFavourites', (req, res) => {
        //create new Item with user trackID, trackName, artistName and kind
        let updateItem = {"trackId": parseInt(`${req.body.trackId}`), "trackName": `${req.body.trackName}`, "artistName": `${req.body.artistName}`, "kind": `${req.body.kind}`}

        favourites.push(updateItem); //Push new params into favourites array.

        res.send('File has been updated.');

        //Write the updated favourites array to myFavourites.json
        fs.writeFileSync('./myFavourites.json', JSON.stringify(favourites), (err) => { //stringify data and write json file again.
            if (err) throw err;
            console.log('Your favourites list has been updated');
            return res.json({
            message: 'New Favourite Added',
            favourites
            });
        });
});

//DELETE
app.delete('/api/myFavourites', (req, res) => { 
        
        const size = favourites.length;

        //loop through favourites to find specific item
        for(let i = 0; i < size; i++) {
            if(favourites[i].trackId == parseInt(`${req.body.trackId}`)) {
                favourites.splice(i, 1);
                let k = i + 1;
                return res.send("Favourite " + k + " removed.")
            }
        }
        
        //Write the updated favourites array to myFavourites.json
        fs.writeFileSync('./myFavourites.json', JSON.stringify(favourites), (err) => { //stringify data and write json file again.
            if (err) throw err;
            console.log('The file has been updated');
            return res.json({
                message: 'Favourite Deleted From List.',
                favourites
            });
        });
    });

//Change Express’ App.js file to call React build assets
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

//Listening on PORT 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

//ERROR
app.use(function(err, req, res, next) {
    console.log(err.stack)
    res.status(500).send('Something broke!')
});

