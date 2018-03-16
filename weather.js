class Weather {
  constructor(city, state) {
    this.apiKey = "a6ffbaa279932c20";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch (`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change the Weather Location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}