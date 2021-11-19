let apiKey = "a80790d87514220f02205f66063c1f98";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(showCurrentWeather);
