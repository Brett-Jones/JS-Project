
  
  const minutesLabel = document.getElementById("minutes");
  const secondsLabel = document.getElementById("seconds");
//   set to let so that the "0" can actually change
  let totalSeconds = 0;
  setInterval(setTime, 1000);
//   change setInterval to const to something = to clearInterval
  function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
  }
//   pad is adding a 0 to the beginning 
  function pad(val) {
    const valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }