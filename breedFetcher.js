const request = require("request");
const API = 'https://api.thecatapi.com/v1/breeds/search';


const fetchBreedDescription = function(searchBreed, callback) {
  const URL = API + `?q=${searchBreed}`;

  
  request(URL, (error,res,body) => {
    try {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        callback(null, data[0].description);
         
      }
    } catch (err) {
      callback(`Breed is not exist.`,null);
    }
  });
  

};

module.exports = {fetchBreedDescription};

