// ورودی اینپوت
let gameNumber = document.getElementById('inputVal');
// تعداد دفعات بازی شده
let numberPlayed = 0;


let playerItem = document.getElementById('playerItem');
// دکمه هایی که توسط پلیر کلیک میشه
let buttons = document.querySelectorAll('.buttonSelect');
// محل نمایش امتیاز پلیر
let playerResult = document.getElementById('playerResult');
let playerScore = 0;


// آرایه ای که کامپیوتر قراره از داخلش تصادفی انتخاب کنه
let modeTypes = ['Rock', 'Paper', 'Scissors'];
let computerItem = document.getElementById('computerItem');
// محل نمایش امتیاز کامپیوتر
let computerResult = document.getElementById('computerResult');
let computerScore = 0;

// نتیجه نهایی
let totalResult = document.getElementById('totalResult');

const gameStart = () => {

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // مقداری که داخل باکس پلیر نمایش داده میشه
            playerItem.innerHTML = btn.innerHTML;
            // مقدار تصادفی که داخل باکس کامپیوتر نمایش داده میشه
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
                // else {
                //     numberPlayed--;
                //     console.log(`تعداد دفعات بازی کم شد`);
                // }

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

    })

}

gameStart();