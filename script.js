

const inputBox = document.querySelector(".input-box");
const searchBtn =document.getElementById(`searchbtn`);
const weather_img =document.querySelector(`.weather-icon`);
const temperature =document.querySelector(`.temperature`);
const countryName =document.getElementById(`country`);
const weatherCnd =document.querySelector(`.condition`);
const humidity =document.getElementById(`humidity-ty`);
const wind_spd =document.getElementById(`wind-speed`);

const location_not_found = document.querySelector('.error');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const apiKey="53ac86997589df5ff885dd08d8c491d5";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    console.log(weather_data);

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    weatherCnd.innerHTML = `${weather_data.weather[0].description}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_spd.innerHTML = `${weather_data.wind.speed}km/H`;
    countryName.innerHTML = `${weather_data.sys.country}`;

    switch(weather_data.weather[0].main){
        case 'Clear':
            weather_img.src = "pictures/sunpure.png" ;
            break ;
        case 'Clouds':
            weather_img.src = "pictures/overcastcloude.png" ;
            break ;
        case 'Rain':
            weather_img.src = "pictures/rainstorm.png" ;
            break ;
        case 'Haze':
            weather_img.src = "pictures/haze.png" ;
            break ;
        case 'Mist':
            weather_img.src = "pictures/fog123.png" ;
            break ;
        case 'Snow':
            weather_img.src = "pictures/snowcloude.png" ;
            break ;

  }

 
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(inputBox.value);
})


