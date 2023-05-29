var seacrh = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')
let captitalSearch = ''


async function changeWeatherUI(captitalSearch) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${captitalSearch}&appid=cb8d857e9528680474d1a7a90b239fba`

  let data = await fetch(apiUrl).then(res=> res.json())

  if (data.cod == 200) {
    content.classList.remove('hide')
    city.innerText = data.name
    visibility.innerText = data.visibility + 'm'
    wind.innerText = data.wind.speed + 'm/s'
    sun.innerText = data.main.humidity + '%'
    let temP = Math.round(data.main.temp - 273.15)
    value.innerText = temP
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
    time.innerText = new Date().toLocaleString('Vi')

    body.setAttribute('class', 'hot')

    if (temP < 25)
    body.setAttribute('class', 'warm')

    if (temP < 19)
    body.setAttribute('class', 'cold')
    
  }
  else {
    content.classList.add('hide')
  }
}

  changeWeatherUI('Ha Noi')

seacrh.addEventListener('keypress', function(e) {
  if (e.code === 'Enter') {
    captitalSearch = seacrh.value.trim()
    changeWeatherUI(captitalSearch)
  }
})