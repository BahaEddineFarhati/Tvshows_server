const fetch = require('node-fetch');

const search_id = (req, res, next) => {
  const query = req.params.list;
  const id_list = query.split("@");
  let result = {};
  console.log(id_list);

  const fetchPromises = id_list.map((id) => {
    const urlid = 'https://api.themoviedb.org/3/tv/' + id + '?language=en-US';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ2ZTlkMTAwZWEwZjM3NGI4MmMyMDc5MGRjNjgzNCIsInN1YiI6IjY1NjBjNzMyNDk3NTYwMDEzYTc5MzI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ryb6rFKWVap7dUjFQeR5b7PJHqhqeBL8GR1tLHflQkg'
      }
    };

    return fetch(urlid, options)
      .then(response => response.json())
      .then(json => {
        result[id] = json;
      })
      .catch(err => console.error('error:' + err));
  });

  Promise.all(fetchPromises)
    .then(() => {
      res.send(result);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

module.exports = search_id;