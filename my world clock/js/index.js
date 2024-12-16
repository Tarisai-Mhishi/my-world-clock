function updateTime() {
  let harareDateElement = document.querySelector("#harare .date");
  let harareTimeElement = document.querySelector("#harare .time");
  let harareTime = moment().tz("Africa/Harare");

  harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
  harareTimeElement.innerHTML = harareTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss[<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>

        <div class="time">${cityTime.format("h:mm:ss")}
            <small>${cityTime.format("A")}  </small>
        </div>
      </div>
      <a href="index.html">Main Page</a>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
