
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
  "start-button").addEventListener(
    "click", function () { timer.start(); });
    
document.getElementById(
  "restart-button").addEventListener(
    "click", function () { timer.restart(); });


  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  const flipCard = index => {
    if (lockBoard) return;
    const card = cards[index]
    if (card === firstCard) return;
    card.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = card;
      return;
    }

    secondCard = card;
    lockBoard = true;

    checkForMatch();
  }

  const checkForMatch = () => {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  const unflipCards = () => {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  const resetBoard = () => {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach((card, index) => card.addEventListener('click', () => flipCard(index)));