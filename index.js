
const timer = {
  totalSeconds: 0,
  start: function() {
      // if statement is asking if this.interval doesn't exist then create interval
    if(!this.interval) {
        const self = this;
      //   val > 9 is in place to ensure each numerical place is a single digit for the time.
        function pad(val) { 
          return val > 9 ? val : "0" + val; }
        this.interval = setInterval(function() {
          self.totalSeconds += 1;
          document.getElementById(
            "minutes").innerHTML = pad(
              Math.floor(self.totalSeconds / 60 % 60));
          document.getElementById(
            "seconds").innerHTML = pad(
              parseInt(self.totalSeconds % 60));
        }, 1000);
    }
  },

  restart: function () {
    timer.totalSeconds = null; 
    clearInterval(this.interval);
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    delete this.interval;
  },
  
};

document.getElementById(
  "start-Button").addEventListener(
    "click", function () { timer.start(); });
    
document.getElementById(
  "restart-Button").addEventListener(
    "click", function () { timer.restart(); });


const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
  this.classList.toggle('flip');
  this.classList.add('flip');

   if (!hasFlippedCard) {
     hasFlippedCard = true;
     firstCard = this;
   }
}
  
  cards.forEach(card => card.addEventListener('click', flipCard));