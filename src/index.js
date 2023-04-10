function showTime(event) {
  event.preventDefault();
  let timezone = moment()
    .tz(event.target.value)
    .format("[It is] dddd, MMMM D, YYYY H:mm A");
  if (event.target.value === "Europe/Paris") {
    alert(`${timezone} in ${event.target.value}`);
  }
  if (event.target.value === "Australia/Sydney") {
    alert(`${timezone} in ${event.target.value}`);
  }
  if (event.target.value === "Asia/Tokyo") {
    alert(`${timezone} in ${event.target.value}`);
  }
}

let citySelect = document.querySelector("#city-names");
citySelect.addEventListener("change", showTime);
