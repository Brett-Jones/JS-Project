
const timer = {
  totalSeconds: 0,
  start: function() {
    const img = document.getElementById(
      "welcome");
    img.style.display = "none";
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

document.getElementById(
  "restart-button").addEventListener(
        "click", function () { location.reload(); });


  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  const flipCard = index => {
    if (lockBoard) return;
    const card = cards[index]
    if (card === firstCard) return;
    card.classList.add('flip');

    console.log(this)

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
    const first = firstCard
    const second = secondCard
    if (isMatch) {
      setTimeout(() => {
        first.classList.add("fly-away")
        second.classList.add("fly-away")

        const result = document.getElementsByClassName("fly-away")
        
      if (result.length === 12) {
        const mins =  clock.textContent.split(":")[0].trim();
        const secs = clock.textContent.split(":")[1].trim();
          alert(`Game Over! Your time was: minutes ${mins}:${secs} seconds`
          );
      }
      }, 500) 
    }

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

  cards.forEach((card, index) => card
    .addEventListener('click', () => flipCard(index)));