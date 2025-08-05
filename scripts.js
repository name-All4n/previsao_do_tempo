const key = "847907df5a02bdf1e829e655c3420a3e"

function putData(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temperature").innerHTML = (data.main.temp) + "°C"
    document.querySelector(".climate").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-weather").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then (response => response.json())

    putData(data)
}

function clickInButton() {
    const city = document.getElementById("cityInput").value;

    searchCity(city)
}
