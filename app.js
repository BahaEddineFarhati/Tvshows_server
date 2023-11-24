const express = require('express');
const app = express();
const port = 3000;




const fetch = require('node-fetch');


let query="game of thrones";










  app.get('/', (req, res) => {


    res.send('Hello, world!');
  });


  
  app.get('/:name', (req, res) => {


    query = req.params.name;

    const url = 'https://api.themoviedb.org/3/search/tv?query='+query;

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ2ZTlkMTAwZWEwZjM3NGI4MmMyMDc5MGRjNjgzNCIsInN1YiI6IjY1NjBjNzMyNDk3NTYwMDEzYTc5MzI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryb6rFKWVap7dUjFQeR5b7PJHqhqeBL8GR1tLHflQkg'
        }
      };


    fetch(url, options)
    .then(res => res.json())
    .then(data => {
        rep = data.results[0];
        res.send(rep);
    })
    .catch(err => console.error('error:' + err));

    
  });



  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });