let searchBtn = document.getElementById('search');
let city = document.getElementById('cityName');
let country = document.getElementById('country');
let limit = 1;
let apiKey = "3608b463d5f05cab5280c3d7c0d3025d";
let dailyTab = document.getElementById('daily-tab-pane');


searchBtn.addEventListener('click', () => {
    dailyTab.innerHTML = "";
    let cityName = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${apiKey}`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {

                city.innerHTML = obj.name + ' ( ';
                country.innerHTML = obj.country + ' ) ';

                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${obj.lat}&longitude=${obj.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean&timezone=auto`, {method: "GET"})
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        data = data["daily"];

                        let i = 0;
                        console.log(data);
                        Object.keys(data["time"]).forEach(() => {

                            const el = document.createElement("div");
                            el.classList.add('row', 'bg-light', 'p-4', 'shadow-sm', 'd-flex', 'align-items-center', 'mb-3');


                            const child1El = document.createElement("div");
                            child1El.classList.add('col-md-3');
                            const child1 = document.createElement("p");
                            child1.classList.add('fw-bold', 'text-success');
                            child1.setAttribute('id', 'dateAndDay');
                            child1.innerHTML = `Date : ${data["time"][i]}`;
                            child1El.append(child1);
                            el.append(child1El);


                            const child2El = document.createElement("div");
                            child2El.classList.add('col-md-3', 'fw-bold');
                            const child2 = document.createElement("p");
                            child2.setAttribute('id', 'maxTemperature');
                            child2.innerHTML = `Max Temperature : ${data["temperature_2m_max"][i]} °C (°F)`;
                            const child3 = document.createElement("p");
                            child3.setAttribute('id', 'minTemperature');
                            child3.innerHTML = `Min Temperature : ${data["temperature_2m_min"][i]} °C (°F)`;
                            child2El.append(child2);
                            child2El.append(child3);
                            el.append(child2El);


                            const child3El = document.createElement("div");
                            child3El.classList.add('col-md-2', 'description', 'text-center', 'text-primary');
                            const child4 = document.createElement("p");
                            child4.classList.add('fw-bold', 'mb-0');
                            const imgChild = document.createElement('img');
                            if (data["precipitation_probability_mean"][i] >= 0 && data["precipitation_probability_mean"][i] <= 10)
                                imgChild.setAttribute('src', 'img/mostly-sunny.jpg');
                            else if (data["precipitation_probability_mean"][i] > 10 && data["precipitation_probability_mean"][i] < 50)
                                imgChild.setAttribute('src', 'img/partly-sunny-cloudy.jpg');
                            else if (data["precipitation_probability_mean"][i] > 50 && data["precipitation_probability_mean"][i] < 80)
                                imgChild.setAttribute('src', 'img/mostly-cloudy.jpg');
                            else if (data["precipitation_probability_mean"][i] >= 80)
                                imgChild.setAttribute('src', 'img/mostly-rainy.jpg');
                            child4.append(imgChild);
                            child3El.append(child4);
                            el.append(child3El);

                            const child4El = document.createElement('div');
                            child4El.classList.add('col-md-3', 'offset-md-1', 'fw-bold', 'text-end');
                            child4El.setAttribute('id', 'precipitationProbabilityMean');
                            child4El.innerHTML = `Average chance of rain : ${data["precipitation_probability_mean"][i]} % `;
                            el.append(child4El);

                            dailyTab.append(el);

                            i++;
                        })


                    })
            });
        })
})


