const express = require('express');
const search_id = require('./tmdb_api/Idsearch.js');
const search_name = require('./tmdb_api/name_search.js');
const getSeries = require('./firebase.js')


const app = express();
const port = 3000;


  app.get('/', (req, res) => {
    res.send('<h1>Welcome to TVSHOWS PROGRESS server ! (name not final)</h1><a href="localhost:3000/api/search/dexter">search</a><br><a href="localhost:3000/api/user_shows/1399@1400">search by id</a>');
  });

  
  app.get('/api/search/:name' ,search_name);

app.get('/api/user_shows/:list',search_id);



app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  // Add your authentication logic here (e.g., check against your database)
  if (email && password) {
    try {
      const user = await getSeries({ email, password });
      console.log(user);
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(404).send("User not found");
    }
  } else {
    res.status(400).json({ message: 'Email and password are required' });
  }
});


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });