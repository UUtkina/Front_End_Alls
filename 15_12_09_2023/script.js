const API_KEI = `1ed610ed374f75e8d07f4dcc28c1c7d8`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;
const COU_TRU = `https://efi-trans.com.ua/info/ISO_country_codes/`;

//const BASE_URL=`https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`
//https://efi-trans.com.ua/info/ISO_country_codes/

const locationInput = document.getElementById("locationInput");
const getWetterButton = document.getElementById("getWeatherButton");
const weatherContainer = document.getElementById("weatherContainer");

getWetterButton.addEventListener("click", () => {
    const location = locationInput.value.trim();

    if (location) {
        weatherContainer.style.display = "block"; // делаем контейнер видимым
        weatherContainer.innerHTML = "";
        const apiUrL = `${BASE_URL}?q=${location}&appid=${API_KEI}`;
        fetch(apiUrL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const li = document.createElement("li");
                //select
                if (data.name) {
                    li.innerHTML = `
                    <h1>${data.name}</h1>
                    <p><strong>Country: </strong>${data.sys.country}</p>
                    <p><strong>Timezone: </strong>${Date(
                                            data.timezone
                                        )}</p>


                    <p><strong>Temperature, C: </strong>${(
                        +data.main.temp - 273.15
                    ).toFixed(1)}</p>
                    <ul><strong>max: </strong>${(
                        +data.main.temp_max - 273.15
                    ).toFixed(1)}</ul>
                    <ul><strong>min: </strong>${(
                        +data.main.temp_min - 273.15
                    ).toFixed(1)}</ul>
                    <p><strong>Humidity, % : </strong>${data.main.humidity}</p>
                    
                    <p><strong>Weather parameters: </strong>${
                        data.weather[0].main
                    }</p> `;
                }

                weatherContainer.appendChild(li);
            });
    }
});
//timezone(timedelta(seconds=7200)) # UTC+02:00
