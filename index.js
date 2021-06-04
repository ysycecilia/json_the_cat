const { fetchBreedDescription } = require('./breedFetcher');

const searchBreed = process.argv[2];

fetchBreedDescription(searchBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});