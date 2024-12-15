function updateTime() {
  let harareElement = document.querySelector("#harare");
  let harareDateElement = document.querySelector("#harare .date");
  let harareTimeElement = document.querySelector("#harare .time");
  let harareTime = moment().tz("Africa/Harare");

  harareDateElement.innerHTML = harareTime.format("MMMM Do YYYY");
  harareTimeElement.innerHTML = harareTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
