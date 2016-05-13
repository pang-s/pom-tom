var STARS = 0;
function startTimer(duration, display) {
var timer = duration, minutes, seconds;
var power_on = true;
setInterval(function () {
    if (power_on){
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      if(STARS < 3){
      alert('Time\'s up! A new star is shining, take a mini break.');
    }
    else{
      alert('Time\'s up! You\'re a star! You deserve a long break.');
    }
      power_on = false;
      STARS += 1;
      updateStars();
      if (STARS < 4){
        integrateBreak();
      }

      if (STARS == 4){
        STARS = 0;
        bigBreak();

      }


      //timer = duration;
    }
  }
}, 1000);
}

function integrateBreak(){
if(STARS < 4){
var fiveMins = 2,
  display = document.querySelector('#time');
integrateTimer(fiveMins, display);
}
}

function bigBreak(){

var twentyFiveMins = 3,
  display = document.querySelector('#time');
integrateTimer(twentyFiveMins, display);

}


function integrateTimer(duration, display) {
var timer = duration, minutes, seconds;
var power_on = true;
setInterval(function () {
if (power_on){
minutes = parseInt(timer / 60, 10);
seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

display.textContent = minutes + ":" + seconds;

if (--timer < 0) {
  alert('Break\'s up!');
  power_on = false;
  if (STARS != 0){
  startTiming();
}
else{

  document.getElementById("startButton").style.visibility = "visible";
}
  //timer = duration;
}
}
}, 1000);
}


function updateStars(){
starDisplay = document.querySelector('#stars');
if (STARS == 0){
starDisplay.textContent = String.fromCodePoint(11088) + String.fromCodePoint(11088)
+ String.fromCodePoint(11088) + String.fromCodePoint(11088);
}
if (STARS == 1){
starDisplay.textContent = String.fromCodePoint(127775)+ String.fromCodePoint(11088)
+ String.fromCodePoint(11088) + String.fromCodePoint(11088);
}
else if(STARS == 2){
starDisplay.textContent = String.fromCodePoint(127775)+ String.fromCodePoint(127775)
+ String.fromCodePoint(11088) + String.fromCodePoint(11088);
}
else if(STARS == 3){
starDisplay.textContent = String.fromCodePoint(127775)+ String.fromCodePoint(127775)
+ String.fromCodePoint(127775) + String.fromCodePoint(11088);
}
else{
starDisplay.textContent = String.fromCodePoint(127775)+ String.fromCodePoint(127775)
+ String.fromCodePoint(127775) + String.fromCodePoint(127775);

}
}



function startTiming() {
document.getElementById("startButton").style.visibility = "hidden";
var twentyFiveMins = 1,
    display = document.querySelector('#time');
startTimer(twentyFiveMins, display);


};
