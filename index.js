// let weather = {
//   paris: {
//     temp: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temp: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temp: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temp: 20.9,
//     humidity: 100,
//   },
//   moscow: {
//     temp: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }
// let Time = new Date();
// console.log(Time.getDate());
// console.log(Time.getMilliseconds());
// console.log(Time.getDay());
// console.log(Time.getFullYear());
// console.log(Time.getMonth());
// let now=new Date();
// console.log(now);
// console.log(now.getMonth());
// console.log(now.getTime());
// console.log(now.getFullYear());
// let Time = new Date();
// let Dayes = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// let Month = [
//   "Jan",
//   "Feb",
//   "March",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ];
// let Months = Month[Time.getMonth()];
// let Days = Dayes[Time.getDay()];
// console.log(Time);
// console.log(Time.getMilliseconds());
// console.log(Days);
// console.log(Time.getFullYear());
// console.log(Months);
// console.log(
//   `Today is ${Days},${Months}${Time.getMonth()},${Time.getFullYear()}`
// );



// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’



let button = document.querySelector("button");
button.addEventListener("click", showTemperature);
function showTemperature(event) {
  event.preventDefault();
  alert("Temperature is 18 degrees");
  button.innerHTML = "18 degrees";
}