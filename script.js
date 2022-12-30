let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let yearH = document.getElementById('year');
let endDate = new Date(2023, 0, 1, 00, 00);
let endTime = endDate.getTime();

function countdown() {
  let todayDate = new Date();
  let todayTime = todayDate.getTime();
  let remainingTime = endTime - todayTime;
  let oneMin = 60 * 1000;
  let oneHr = 60 * oneMin;
  let oneDay = 24 * oneHr;
  yearH.textContent = endDate.getFullYear();
  let addZeroes = (num) => (num < 10 ? `0${num}` : num);
  let message = '';

  if (endTime < todayTime) {
    clearInterval(i);
    message = `<h1>HAPPY NEW YEAR</h1><div class='box'>
        <span class='num' id='day-box'>2</span>
      </div><div class='box'>
        <span class='num' id='day-box'>0</span>
      </div><div class='box'>
        <span class='num' id='day-box'>2</span>
      </div><div class='box'>
        <span class='num' id='day-box'>3</span>
      </div>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
    message = "";
    if(daysLeft > 0){
      message = `<div class='box'>
      <span class='num' id='day-box'>${daysLeft}</span>
      <span class='text'>Days</span>
    </div>`
    }
    if(hrsLeft > 0){
      message = message + `<div class='box'>
      <span class='num' id='day-box'>${hrsLeft}</span>
      <span class='text'>Hrs</span>
    </div>` +
    `<div class='box'>
      <span class='num' id='day-box'>${minsLeft}</span>
      <span class='text'>Mins</span>
    </div>`
    }else if(minsLeft > 0){
      message = message + `<div class='box'>
        <span class='num' id='day-box'>${minsLeft}</span>
        <span class='text'>Mins</span>
      </div>`
    }

      message = message + `<div class='box'>
      <span class='num' id='day-box'>${secsLeft}</span>
      <span class='text'>Secs</span>
    </div>`

    // dayBox.textContent = addZeroes(daysLeft);
    // hrBox.textContent = addZeroes(hrsLeft);
    // minBox.textContent = addZeroes(minsLeft);
    // secBox.textContent = addZeroes(secsLeft);
    
  }
  document.querySelector(
    ".countdown"
  ).innerHTML = message;
}

let i = setInterval(countdown, 1000);
countdown();