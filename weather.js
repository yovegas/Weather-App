let time = document.getElementsByClassName("clock2")[0];
function updateTime() {
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if (minutes < 10) {
  minutes = "0" + minutes
}
if (seconds < 10) {
  seconds = "0" + seconds
}
time.innerHTML = hours + ":" + minutes + ":" + seconds;
}
updateTime();
setInterval(updateTime, 1000);


let latitude = 0;
let longitude = 0;
let picture = {
    0: "Images/Images/sunny.svg",
    1: "Images/Images/cloudy.svg",
    2: "Images/Images/cloudy.svg",
    3: "Images/Images/cloudy.svg",
    45: "Images/Images/snowy.svg",
    48: "Images/Images/snowy.svg",
    51: "Images/Images/rainy.svg",
    53: "Images/Images/rainy.svg",
    55: "Images/Images/rainy.svg",
    56: "Images/Images/rainy-2.svg",
    57: "Images/Images/rainy-2.svg",
    61: "Images/Images/rainy-2.svg",
    63: "Images/Images/rainy-2.svg",
    65: "Images/Images/rainy-2.svg",
    66: "Images/Images/rainy-2.svg",
    67: "Images/Images/rainy-2.svg",
    71: "Images/Images/snowy.svg",
    73: "Images/Images/snowy.svg",
    75: "Images/Images/snowy.svg",
    77: "Images/Images/snowy.svg",
    80: "Images/Images/rainy-2.svg",
    81: "Images/Images/rainy-2.svg",
    82: "Images/Images/rainy-2.svg",
    85: "Images/Images/snowy.svg",
    86: "Images/Images/snowy.svg",
    95: "Images/Images/stormy.svg",
    96: "Images/Images/stormy.svg",
    99: "Images/Images/stormy.svg"
};

let days = document.getElementsByClassName("weatherDay");
async function myLocation() {
    let response = await fetch("https://ipapi.co/json/")
    let data = await response.json();
     latitude = data.latitude;
     longitude = data.longitude;
}



async function getWeather() {
    await myLocation();
    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Africa%2FCairo&forecast_days=3")
    let data = await response.json();
    for (let index = 0; index < 3; index++) {
      days[index].innerHTML +=  "<b>"+ data.daily.temperature_2m_min[index] + "°" + "-" + data.daily.temperature_2m_max[index] + "°" + "</b>";

      
      days[index].querySelector("img").setAttribute("src", picture[data.daily.weathercode[index]]);
      console.log( data.daily.weathercode[index]);
      console.log( data.daily.weathercode);
    }
  }
getWeather()

let bgd = document.querySelector(".container"); 
let date = new Date();
let hour = date.getHours();

if (hour > 20 || hour < 5) {
    bgd.style.background = "rgb(82,225,225)";
    bgd.style.background = "linear-gradient(355deg, rgba(82,225,225,1) 0%, rgba(50,45,108,1) 100%)";
}

