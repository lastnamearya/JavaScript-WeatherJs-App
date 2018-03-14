// Init weather object
const weather = new Weather('Boston', 'MA');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);


// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(results)); 
}
