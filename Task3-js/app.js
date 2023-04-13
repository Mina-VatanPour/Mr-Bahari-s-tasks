import fetchManager from "./fetchManager.js";

const searchBtn = document.getElementById('search');

const city = document.getElementById('cityName');
const country = document.getElementById('country');

const loader = document.getElementById('loader');
const tabs = document.getElementById('tabs');
const dailyTab = document.getElementById('daily-tab-pane');


searchBtn.addEventListener('click', () => {

    searchBtn.disabled = true;
    dailyTab.innerHTML = "";
    const cityName = document.getElementById('city').value;
    convertCityNameToLatAndLon(cityName);

})

function convertCityNameToLatAndLon(cityName) {

    if (cityName === "") {
        city.style.color = "red";
        city.innerHTML = "Please enter city!"
        searchBtn.disabled = false;
        return;
    }

    fetchManager.openWeatherMap(cityName)
        .then(res => res.json())
        .then(data => {

            if (data.length > 0) {
                city.innerHTML = data[0]["name"] + ' ( ';
                country.innerHTML = data[0]["country"] + ' ) ';
                city.style.color = "green";
                loader.style.display = "block";
                tabs.style.display = "block";
                getWeatherAccordingToLatAndLon(data[0]["lat"], data[0]["lon"]);

            } else {
                city.style.color = "red";
                city.innerHTML = "The entered city does not exist!"
                searchBtn.disabled = false;
            }
        })
}

function getWeatherAccordingToLatAndLon(lat, lon) {

    fetchManager.openMeteorology(lat, lon)

        .then(res => res.json())
        .then(data => {
            loader.style.display = "none";
            data = data["daily"];

            const indexOfDataTimeItems = data["time"].map((item, index) => index);

            indexOfDataTimeItems.map((item) => {

                let rowDetails = document.createElement('div');
                rowDetails.classList.add('row', 'bg-light', 'p-4', 'shadow-sm', 'd-flex', 'align-items-center', 'mb-3')


                let dateAndDay = document.createElement('div')
                dateAndDay.classList.add('col-md-3', 'fw-bold');
                dateAndDay.innerHTML = `Date : ${data.time[item]}`;


                let maxAndMinTemp = document.createElement('div')
                maxAndMinTemp.classList.add('col-md-3', 'fw-bold', 'text-success');
                maxAndMinTemp.innerHTML = `Max Temperature : ${data.temperature_2m_max[item]} °C (°F) <br> Min Temperature : ${data.temperature_2m_min[item]} °C (°F)`


                let averageChanceOfRain = document.createElement('div')
                averageChanceOfRain.classList.add('col-md-3', 'offset-md-3', 'fw-bold', 'text-end');
                averageChanceOfRain.innerHTML = `Average chance of rain : ${data.precipitation_probability_mean[item]} %`;


                rowDetails.append(dateAndDay, maxAndMinTemp, averageChanceOfRain);
                dailyTab.append(rowDetails);

            })


        }).finally(() => searchBtn.disabled = false);
}
