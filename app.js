// Caching the DOM

let playerScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("player-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoartd_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//=====================================================================
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    const smallPlayerWord = "you".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} Beats ${convertToWord(computerChoice)}${smallCompWord} . You Win!!`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    const smallPlayerWord = "you".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} Loses To ${convertToWord(computerChoice)}${smallCompWord} . Sorry...You Lose`;
}

function draw(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    compScore_span.innerHTML = compScore;
    const smallPlayerWord = "you".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} Beats ${convertToWord(computerChoice)}${smallCompWord} . You Win!!`;
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;

    }

}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissors_div.addEventListener('click', function() {
        game("s");
    });
};

main();