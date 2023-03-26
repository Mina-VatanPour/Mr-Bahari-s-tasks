let gameNumber = document.getElementById('inputVal');
let numberPlayed = 0;

let playerItem = document.getElementById('playerItem');
let playerResult = document.getElementById('playerResult');
let playerScore = 0;

let modeTypes = ['Rock', 'Paper', 'Scissors'];

let computerItem = document.getElementById('computerItem');
let computerResult = document.getElementById('computerResult');
let computerScore = 0;

let totalResult = document.getElementById('totalResult');

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
console.log(event)
    playerItem.innerHTML = event.target.id;
    console.log(playerItem.innerHTML)
    computerItem.innerHTML = modeTypes[Math.floor(Math.random() * modeTypes.length)];
    numberPlayed++;

    if (numberPlayed <= gameNumber.value) {

        if (playerItem.innerHTML !== computerItem.innerHTML) {

            if ((playerItem.innerHTML === modeTypes[0] && computerItem.innerHTML === modeTypes[2]) ||
                (playerItem.innerHTML === modeTypes[2] && computerItem.innerHTML === modeTypes[1]) ||
                (playerItem.innerHTML === modeTypes[1] && computerItem.innerHTML === modeTypes[0])
            ) {
                playerScore++;
                playerResult.innerHTML = `Score : ${playerScore}`;

            } else {
                computerScore++;
                computerResult.innerHTML = `Score : ${computerScore}`;
            }

        }
    } else {
        alert("The end of game, enter OK and start new game.")
        location.reload();
    }

    // show result
    if (playerScore > computerScore) {
        totalResult.style.color = "green";
        totalResult.innerHTML = "player win :)";
    } else if (playerScore === computerScore) {
        totalResult.style.color = "yellow";
        totalResult.innerHTML = "The result was tied";
    } else {
        totalResult.style.color = "red";
        totalResult.innerHTML = "player lost :( ";
    }
})