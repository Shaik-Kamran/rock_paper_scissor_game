const choices = ["rock", "paper", "scissors"];
const images = {
    rock: "images/rock.png",
    paper: "images/paper.png",
    scissors: "images/scissors.png"
};

const choiceButtons = document.querySelectorAll(".choices button");
const userChoiceSpan = document.getElementById("user-choice");
const computerChoiceSpan = document.getElementById("computer-choice");
const winnerP = document.getElementById("winner");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        userChoiceSpan.textContent = userChoice;

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        computerChoiceSpan.textContent = computerChoice;

        const winner = determineWinner(userChoice, computerChoice);
        displayWinner(winner);

        displayImages(userChoice, computerChoice); // Function to display images
    });
});

function determineWinner(userChoice, computerChoice) {
    // ... (logic for determining the winner)
    if (userChoice === computerChoice) {
        return "It's a tie!";
      } else if ((userChoice === "rock" && computerChoice === "scissors") ||
                 (userChoice === "paper" && computerChoice === "rock") ||
                 (userChoice === "scissors" && computerChoice === "paper")) {
        return "You win!";
      } else {
        return "Computer wins!";
      }
    
}

function displayWinner(winner) {
    // ... (logic for displaying the winner message)
    winnerP.textContent = winner;

    
}

function displayImages(userChoice, computerChoice) {
    const userImage = document.createElement("img");
    userImage.src = images[userChoice];

    const computerImage = document.createElement("img");
    computerImage.src = images[computerChoice];

    // ... (code to append images to the results section)
}