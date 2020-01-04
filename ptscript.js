function showShortBreakNotif() {
  let myNotification = new Notification('Study Break Time', {
    body: 'Time\'s up! A new star is shining, take a mini break.'
  })

  myNotification.show();
}

function showLongBreakNotif() {
  let myNotification = new Notification('Study Break Time', {
    body: 'Time\'s up! You\'re a star! You deserve a long break.'
  })

  myNotification.show();
}

function showStudyTimeNotif() {
  let myNotification = new Notification('Study Time', {
    body: 'Time to study!'
  })

  myNotification.show();
}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  // i dont want negatives
  if (minutes < 0 || seconds < 0 || hours < 0) {
    return "00:00";
  }

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  return minutes + ":" + seconds;
}

function startTimer() {
  var time = document.querySelector('#time');
  var STARS = 0;
  updateStars(STARS);

  var oneMinMs = 60000;
  var shortBreakMs = 5 * oneMinMs;
  var longBreakMs = 20 * oneMinMs;
  var studyMs = 25 * oneMinMs;
  // var shortBreakMs = 3000;
  // var longBreakMs = 4000;
  // var studyMs = 2500;

  var startTime = new Date();
  var endTime = new Date(startTime.getTime() + studyMs);
  var goalMs = studyMs;
  time.textContent = msToTime(goalMs);

  var onLongBreak = false;
  var onShortBreak = false;

  interval = setInterval(function () {
    var now = new Date();
    var msElapsed = now - startTime
    var secondsDone = Math.floor((msElapsed / 1000))
    var minutesDone = Math.floor((secondsDone / 60))

    // the number of minutes i have to go depends what the current break or study time is
    var msLeft = goalMs - msElapsed;
    time.textContent = msToTime(msLeft);

    if (now > endTime) {
      // restart timer to 0, update new end time
      startTime = now;

      if (onLongBreak) {
        // finish long break and start again.

        document.getElementById("startButton").style.visibility = "visible";
        clearInterval(interval)
      }
      else if (onShortBreak) {
        // finish short break so dont get a star but just study again.
        endTime = new Date(startTime.getTime() + studyMs);
        onShortBreak = false;
        goalMs = studyMs;
        showStudyTimeNotif();
      }
      else if (STARS == 3) {
        // if 3 stars collected then this is the 4th, do long break 
        STARS += 1;
        updateStars(STARS);
        endTime = new Date(startTime.getTime() + longBreakMs);
        onLongBreak = true;
        goalMs = longBreakMs;
        showLongBreakNotif();
      }
      else {
        // collect a star, update endtime with short break
        STARS += 1;
        updateStars(STARS);
        endTime = new Date(startTime.getTime() + shortBreakMs);
        onShortBreak = true;
        goalMs = shortBreakMs;
        showShortBreakNotif();
      }
    }

  }, 1000);
}


function updateStars(st) {
  starDisplay = document.querySelector('#new_stars');
  if (st == 0) {
    starDisplay.textContent = String.fromCodePoint(11088) + String.fromCodePoint(11088)
      + String.fromCodePoint(11088) + String.fromCodePoint(11088);
  }
  else if (st == 1) {
    starDisplay.textContent = String.fromCodePoint(127775) + String.fromCodePoint(11088)
      + String.fromCodePoint(11088) + String.fromCodePoint(11088);
  }
  else if (st == 2) {
    starDisplay.textContent = String.fromCodePoint(127775) + String.fromCodePoint(127775)
      + String.fromCodePoint(11088) + String.fromCodePoint(11088);
  }
  else if (st == 3) {
    starDisplay.textContent = String.fromCodePoint(127775) + String.fromCodePoint(127775)
      + String.fromCodePoint(127775) + String.fromCodePoint(11088);
  }
  else if (st == 4) {
    starDisplay.textContent = String.fromCodePoint(127775) + String.fromCodePoint(127775)
      + String.fromCodePoint(127775) + String.fromCodePoint(127775);
  }
}

function startTiming() {
  document.getElementById("startButton").style.visibility = "hidden";
  startTimer();
}

function restart() {
  // just restart everything
  var time = document.querySelector('#time');
  time.textContent = "25:00";
  clearInterval(interval)
  document.getElementById("startButton").style.visibility = "visible";
}
