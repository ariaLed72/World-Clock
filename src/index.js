function updateTime() {
  //Milan
  let milanElement = document.querySelector("#milan");
  let milanDateElement = milanElement.querySelector(".date");
  let milanTimeElement = milanElement.querySelector(".time");
  let milanTimezoneElement = moment().tz("Europe/Rome");

  milanDateElement.innerHTML = moment().format("MMMM Do YYYY");
  milanTimeElement.innerHTML = `${milanTimezoneElement.format(
    "H:mm:ss"
  )} <small>${milanTimezoneElement.format("A")}</small>`;

  //San Diego
  let sanDiegoElement = document.querySelector("#san-diego");
  let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
  let sanDiegoTimeElement = sanDiegoElement.querySelector(".time");
  let sanDiegoTimezoneElement = moment().tz("America/Los_Angeles");

  sanDiegoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  sanDiegoTimeElement.innerHTML = `${sanDiegoTimezoneElement.format(
    "H:mm:ss"
  )} <small>${sanDiegoTimezoneElement.format("A")}</small>`;

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTimezoneElement = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTimezoneElement.format(
    "H:mm:ss"
  )} <small>${tokyoTimezoneElement.format("A")}</small>`;
}

function updateTimezone(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
        <div class="city">
              <div>
                <h2 id="city-name">${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
              </div>
              <div class="time">${cityTime.format(
                "H:mm:ss"
              )} <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="index.html">Refresh</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city-names");

citiesSelect.addEventListener("change", updateTimezone);
