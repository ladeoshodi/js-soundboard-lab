/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let playedAudios = [];
/*------------------------ Cached Element References ------------------------*/
const playerButtons = Array.from(document.querySelectorAll("#player > div"));
const audio = document.querySelector("#audio");
const randomBtn = document.querySelector("#randomizer");
/*-------------------------------- Functions --------------------------------*/
function playAudio(audioEl) {
  audio.src = `sounds/${audioEl.id}.wav`;
  audio.play();
  audioEl.classList.add("playing");
  playedAudios.push(audioEl);
}

function playRandomAudio(e) {
  const randomIdx = Math.floor(Math.random() * playerButtons.length);
  const randomAudio = playerButtons[randomIdx];
  playAudio(randomAudio);
}

function cleanUp() {
  let intervalInt = setInterval(() => {
    try {
      let playedAudio = playedAudios.shift();
      playedAudio.classList.remove("playing");
    } catch {
      clearInterval(intervalInt);
    }
    if (!playedAudios.length) {
      clearInterval(intervalInt);
    }
  }, 500);
}
/*----------------------------- Event Listeners -----------------------------*/
playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", (e) => {
    playAudio(e.target);
  });
});

randomBtn.addEventListener("click", playRandomAudio);

audio.addEventListener("ended", cleanUp);
