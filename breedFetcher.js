const request = require("request");
const args = process.argv.slice(2);

const searchBreed = args.toString().substr(0,4);
const URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${searchBreed}`;

request(URL, (err,res,body) => {
  try {
    if (err) {
      console.log(err);
    } else {
      const data = JSON.parse(body);
      console.log(data[0].breeds[0].description);
    }
  } catch (err) {
    console.log(`Breed ${args} is not exist.`);
  }
});

