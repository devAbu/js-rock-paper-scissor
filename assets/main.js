let player = document.querySelectorAll(".player");

for (let i = 0; i < player.length; i++) {
  player[i].addEventListener("click", () => {
    let options = ["rock", "paper", "scissors"];
    let compRandom = options[Math.floor(Math.random() * options.length)];

    let playerClicked = player[i].value;

    if (playerClicked == compRandom) {
      alert("Draw!");
    } else if (
      (playerClicked == "rock" && compRandom == "paper") ||
      (playerClicked == "paper" && compRandom == "scissors") ||
      (playerClicked == "scissors" && compRandom == "rock")
    ) {
      alert(
        `You lose! You selected ${playerClicked} --> Computer Selected ${compRandom}`
      );
    } else {
      alert(
        `You win! You selected ${playerClicked} --> Computer Selected ${compRandom}`
      );
    }
  });
}
