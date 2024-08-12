const hoursHand = document.getElementById('hours-hand');
const minutesHand = document.getElementById('minutes-hand');
const secondsHand = document.getElementById('seconds-hand');

function updateTime() {
  const currentTime = new Date();  

  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  const hoursDegree = convertHoursToDegree(currentHours, currentMinutes);
  const minutesDegree = convert60sToDegree(currentMinutes);
  const secondsDegree = convert60sToDegree(currentSeconds);

  hoursHand.style.setProperty(
    'transform',
    `rotate(${hoursDegree}deg)`
  );

  minutesHand.style.setProperty(
    'transform',
    `rotate(${minutesDegree}deg)`
  );

  secondsHand.style.setProperty(
    'transform',
    `rotate(${secondsDegree}deg)`
  );
}

function convertHoursToDegree(hours, minutes) {
  const totalHours = hours + minutes / 60;
  return (360 / 12) * totalHours;
}

function convert60sToDegree(value) {
  return (360 / 60) * value;
}

setInterval(() => {
  updateTime();
}, 1000);
