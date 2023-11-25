const express = require('express');
const search_id = require('./tmdb_api/Idsearch.js');
const search_name = require('./tmdb_api/name_search.js');


const app = express();
const port = 3000;


  app.get('/', (req, res) => {
    res.send('<h1>Welcome to TVSHOWS PROGRESS server ! (name not final)</h1>');
  });

  
  app.get('/api/search/:name' ,search_name, (req, res) => {
  });

app.get('/api/user_shows/:list',search_id, (req, res) => {
  

});


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });