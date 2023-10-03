const handHour = document.querySelector(".hand--hour");
const handMinute = document.querySelector(".hand--minute");
const handSecond = document.querySelector(".hand--second");
const headerText = document.querySelector(".header--text");

setInterval(function () {
  const dateTime = new Date();
  const hour = dateTime.getHours() > 12 ? dateTime.getHours() - 12 : dateTime.getHours();
  const minute = dateTime.getMinutes();
  const second = dateTime.getSeconds();
  console.log(hour, minute, second);

  handHour.style.transform = `rotate(${hour * 30 - 90}deg)`;
  handMinute.style.transform = `rotate(${minute * 6 - 90}deg)`;
  handSecond.style.transform = `rotate(${second * 6 - 90}deg)`;
  headerText.textContent = `${hour}:${minute}:${second}`;
}, 1000);
