// selector
const time = document.querySelector(".time");
const cloud = document.querySelector(".cloud");
const description = document.querySelector(".description");
const temp = document.querySelector(".temp");

// background image
const cloudurl =
  "https://images.unsplash.com/photo-1564750975191-0ed807751adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";
const rain =
  "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const haze =
  "https://images.unsplash.com/photo-1488342021833-581baa86e81b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const sunny = "";

// key
const API_KEY = "acbd94efaeaaed7b7cc426b035cf7523";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=jakarta,id&appid=${API_KEY}&lang=id`
)
  .then((response) => response.json())
  .then((data) => {
    const date = new Date();
    let tempval = data["main"];
    let weatherval = data["weather"];

    if (weatherval[0].main === "Clouds") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = `url(${cloudurl})`;
      document.getElementById("status").src = "./icons/cloudy-day.png";
    } else if (weatherval[0].main === "Haze") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = `url(${haze})`;
      document.getElementById("status").src = "./icons/weather-forecast.png";
    } else if (weatherval[0].main === "Rain") {
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundImage = `url(${rain})`;
      document.getElementById("status").src = "./icons/rain.png";
    }

    time.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
    cloud.innerHTML = `${data.name} , ${weatherval[0].description}`;
    description.innerHTML = `description : ${weatherval[0].description}`;
    temp.innerHTML = `temp : ${tempval.temp} feels_like : ${tempval.temp_min} - ${tempval.temp_max} pressure: ${tempval.pressure} humidity : ${tempval.humidity}`;
  })
  .catch((err) => console.log(err));
