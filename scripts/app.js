/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
const playerButtons = Array.from(document.querySelectorAll("#player > div"));
const audio = document.querySelector("#audio");
/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", (e) => {
    audio.src = `sounds/${e.target.id}.wav`;
    audio.play();
  });
});
