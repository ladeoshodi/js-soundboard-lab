/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const playerButtons = Array.from(document.querySelectorAll("#player > div"));
const audio = document.querySelector("#audio");
const randomBtn = document.querySelector("#randomizer");
/*-------------------------------- Functions --------------------------------*/
function playAudio(audioEl) {
  audio.src = `sounds/${audioEl.id}.wav`;
  audio.play();
}

function playRandomAudio(e) {
  const randomIdx = Math.floor(Math.random() * playerButtons.length);
  const randomAudio = playerButtons[randomIdx];
  playAudio(randomAudio);
}
/*----------------------------- Event Listeners -----------------------------*/
playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", (e) => {
    playAudio(e.target);
  });
});

randomBtn.addEventListener("click", playRandomAudio);
