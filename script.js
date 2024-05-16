var box = document.getElementById("box");
var timeBegan = null; // did the clock start -> date
var timeStopped = null; // at what time has timer stopped -> date
var stoppedDuration = 0; // how long has it been stopped -> number
var startInterval = null; // this is needed to stop the startInterval() method
var flag = false; // timer is off

box.addEventListener("click", function () {
  if (!flag) {
    startTimer();
    flag = true;
  } else {
    stopTimer();
    flag = false;
  }
});

box.addEventListener("dblclick", function () {
  clearInterval(startInterval);

  timeBegan = null;
  timeStopped = null;
  stoppedDuration = 0;
  document.getElementById("timer-display").innerHTML = "00:00:00:00";
});

function startTimer() {
  if (timeBegan === null) timeBegan = new Date();

  if (timeStopped !== null) stoppedDuration += new Date() - timeStopped;

  startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
  timeStopped = new Date();
  clearInterval(startInterval);
}

function clockRunning() {
  var currentTime = new Date();
  var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
  var hours = timeElapsed.getUTCHours();
  var minutes = timeElapsed.getUTCMinutes();
  var seconds = timeElapsed.getUTCSeconds();
  var millisecconds = timeElapsed.getUTCMilliseconds();
  millisecconds = Math.floor(millisecconds / 10);
  document.getElementById("timer-display").innerHTML =
    (hours = hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes = minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds = seconds < 10 ? "0" + seconds : seconds) +
    ":" +
    (millisecconds = millisecconds < 10 ? "0" + millisecconds : millisecconds);
}
