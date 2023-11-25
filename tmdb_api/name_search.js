const fetch = require('node-fetch');

const search_name = (req, res , next) => {


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
    .then(data => data.json())
    .then(data => {
        rep = data.results.slice(0,3);
        res.send(rep);
    })
    .catch(err => console.error('error:' + err));

}

module.exports = search_name;
