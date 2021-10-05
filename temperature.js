
// api key declare
const api = "05c29fc9d77eda70c6f51931161ff061";
// addEventListener handle
const searchButton = document.getElementById("button").addEventListener('click',function(){
let inputField = document.getElementById('input-filed').value;
document.getElementById("input-filed").value ="";
 const url =` https://api.openweathermap.org/data/2.5/weather?q=${inputField}&appid=${api}&units=metric`;

 fetch(url)
 .then(res=>res.json())
 .then(data=>displayWeather(data))
    
})
function displayWeather(temperature){
   //  console.log(temperature)
   // Error HANDLE
    if(temperature.cod === `404`){
       document.getElementById('search-error').innerHTML = 
       ` <h3 class= "text-center text-danger" > city not found </h3> `
    }
    else{

        document.getElementById('search-error').innerHTML = " ";
    }
   document.getElementById("weather-container").innerHTML =
   `
   <img src="https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png" alt="">
   <h1> ${temperature.name}</h1>
   <h3><span>${temperature.main.temp}</span>&deg;C</h3>
   <h1 class="lead">${temperature.weather[0].main}</h1>
   `
}
