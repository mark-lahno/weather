//590d03d0b624eb9c65e8a1e9a4de2390 // my appid key

const param = {
  'url': "https://api.openweathermap.org/data/2.5/",
  'appid': '590d03d0b624eb9c65e8a1e9a4de2390',
}
const cityes = {
  '4380138': "Carroll County",
  '4381104': "Chillicothe",
  '4384778': "Dunklin County",
  '4387545': "Gainesville",
  '77946': "Ash Shatt",
  '79219': "Al Jurbah",
  '151240': "Nyakato",
  '192950': "Republic of Kenya",
  '250624': "Qīr Moāv",
};


let count = 1;
for (key in cityes) {
  let optionDiv = document.createElement("option");
  let fatherDiv = document.querySelector('#city')
  optionDiv.setAttribute('dataID', key)
  optionDiv.innerHTML = cityes[key];
  optionDiv.classList.add("option" + count);
  optionDiv.value = key;
  fatherDiv.appendChild(optionDiv);
  count++;
}

function getWeather() {
  const cityId = document.querySelector('#city').value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then(weather => {
      return weather.json();
    }).then(showWeather);
  // console.log(cityId);
};

function showWeather(data) {
  document.querySelector('.weather-temperature').innerHTML = `${Math.round(data.main.temp)} &deg;`
  document.querySelector('.weather-clouds').textContent = data.weather[0].main
  document.querySelector('.weather-img').innerHTML = `<img src= https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`
}

getWeather();
// document.querySelector('#city').onchange = getWeather;
document.querySelector('.btn').onclick = getWeather;



