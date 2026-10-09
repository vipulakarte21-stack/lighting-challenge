// ======================================================
// LIGHTING CHALLENGE - GAME ENGINE
// ======================================================


// ==================== GOOGLE SHEETS ====================

const GOOGLE_SHEETS_URL =
    "https://script.google.com/macros/s/AKfycbzMY62dfAyUnMXspiR3A7-GtXpP96cV5UlmZdh_TnmswQ8akNlqjcA4FwDmyGijTAqf/exec";


// ==================== GAME STATE ====================

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;

let lives = 3;
let timeLeft = 180;

let timer = null;
let playerName = "";
let gameEnded = false;

let gameQuestions = [];


// ==================== SOUND ENGINE ====================

let audioContext = null;


function initAudio() {

    if (!audioContext) {
        audioContext =
            new (window.AudioContext ||
                window.webkitAudioContext)();
    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }
}


function playTone(
    frequency,
    duration,
    type = "sine",
    volume = 0.07
) {

    initAudio();

    const oscillator =
        audioContext.createOscillator();

    const gainNode =
        audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.value = frequency;

    gainNode.gain.setValueAtTime(
        volume,
        audioContext.currentTime
    );

    gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + duration
    );

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + duration
    );
}


function soundClick() {

    playTone(
        700,
        0.06,
        "sine",
        0.05
    );
}


function soundStart() {

    playTone(
        440,
        0.12,
        "sine",
        0.07
    );

    setTimeout(() => {

        playTone(
            660,
            0.12,
            "sine",
            0.07
        );

    }, 100);

    setTimeout(() => {

        playTone(
            880,
            0.18,
            "sine",
            0.07
        );

    }, 200);
}


function soundCorrect() {

    playTone(
        523,
        0.10,
        "sine",
        0.07
    );

    setTimeout(() => {

        playTone(
            659,
            0.10,
            "sine",
            0.07
        );

    }, 100);

    setTimeout(() => {

        playTone(
            784,
            0.16,
            "sine",
            0.07
        );

    }, 200);
}


function soundWrong() {

    playTone(
        220,
        0.18,
        "sawtooth",
        0.05
    );

    setTimeout(() => {

        playTone(
            165,
            0.25,
            "sawtooth",
            0.05
        );

    }, 150);
}


function soundFinish() {

    playTone(
        523,
        0.12,
        "sine",
        0.07
    );

    setTimeout(() => {

        playTone(
            659,
            0.12,
            "sine",
            0.07
        );

    }, 120);

    setTimeout(() => {

        playTone(
            784,
            0.12,
            "sine",
            0.07
        );

    }, 240);

    setTimeout(() => {

        playTone(
            1047,
            0.30,
            "sine",
            0.08
        );

    }, 360);
}


// ==================== DOM ELEMENTS ====================

const startScreen =
    document.getElementById(
        "start-screen"
    );

const quizScreen =
    document.getElementById(
        "quiz-screen"
    );

const resultScreen =
    document.getElementById(
        "result-screen"
    );


const playerNameInput =
    document.getElementById(
        "player-name"
    );

const startButton =
    document.getElementById(
        "start-button"
    );


const livesDisplay =
    document.getElementById(
        "lives"
    );

const scoreDisplay =
    document.getElementById(
        "score"
    );

const timerDisplay =
    document.getElementById(
        "timer"
    );


const questionNumberDisplay =
    document.getElementById(
        "question-number"
    );

const applicationDisplay =
    document.getElementById(
        "application"
    );

const questionDisplay =
    document.getElementById(
        "question"
    );


const optionsContainer =
    document.getElementById(
        "options"
    );

const feedbackDisplay =
    document.getElementById(
        "feedback"
    );

const nextButton =
    document.getElementById(
        "next-button"
    );


const resultName =
    document.getElementById(
        "result-name"
    );

const finalScore =
    document.getElementById(
        "final-score"
    );

const correctCount =
    document.getElementById(
        "correct-count"
    );

const accuracyDisplay =
    document.getElementById(
        "accuracy"
    );

const finalTime =
    document.getElementById(
        "final-time"
    );


const restartButton =
    document.getElementById(
        "restart-button"
    );


// ==================== EVENT LISTENERS ====================

startButton.addEventListener(
    "click",
    () => {

        soundClick();

        startGame();

    }
);


nextButton.addEventListener(
    "click",
    () => {

        soundClick();

        nextQuestion();

    }
);


restartButton.addEventListener(
    "click",
    () => {

        soundClick();

        restartGame();

    }
);


// ==================== SHUFFLE FUNCTION ====================

function shuffleArray(array) {

    const shuffled =
        [...array];

    for (
        let i = shuffled.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            shuffled[i],
            shuffled[j]
        ] =
        [
            shuffled[j],
            shuffled[i]
        ];
    }

    return shuffled;
}


// ==================== RANDOM QUESTIONS ====================

function createGameQuestions() {

    gameQuestions =
        shuffleArray(questions)
            .slice(0, 12);
}


// ==================== LIFE DISPLAY ====================

function updateLivesDisplay() {

    const fullHearts =
        "❤️ ".repeat(lives);

    const emptyHearts =
        "🖤 ".repeat(3 - lives);

    livesDisplay.textContent =
        (
            fullHearts +
            emptyHearts
        ).trim();
}


// ==================== START GAME ====================

function startGame() {

    playerName =
        playerNameInput.value.trim();

    if (playerName === "") {

        alert(
            "Please enter your name before starting."
        );

        return;
    }


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    lives = 3;

    timeLeft = 180;

    gameEnded = false;


    createGameQuestions();


    scoreDisplay.textContent =
        score;

    timerDisplay.textContent =
        timeLeft;

    updateLivesDisplay();


    startScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    soundStart();

    startTimer();

    showQuestion();
}


// ==================== TIMER ====================

function startTimer() {

    clearInterval(timer);


    timer = setInterval(
        () => {

            if (gameEnded) {

                clearInterval(timer);

                return;
            }


            timeLeft--;

            timerDisplay.textContent =
                timeLeft;


            if (timeLeft <= 0) {

                timeLeft = 0;

                timerDisplay.textContent =
                    "0";

                endGame("Time Up");
            }

        },
        1000
    );
}


// ==================== SHOW QUESTION ====================

function showQuestion() {

    if (
        currentQuestion >=
        gameQuestions.length
    ) {

        endGame("Completed");

        return;
    }


    const q =
        gameQuestions[
            currentQuestion
        ];


    questionNumberDisplay.textContent =
        currentQuestion + 1;


    applicationDisplay.textContent =
        q.application;


    questionDisplay.textContent =
        q.question;


    optionsContainer.innerHTML =
        "";


    feedbackDisplay.textContent =
        "";

    feedbackDisplay.className =
        "";


    nextButton.classList.add(
        "hidden"
    );


    // Options stay in their original order

    q.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option-button";


            button.textContent =
                option;


            button.addEventListener(
                "click",
                () => selectAnswer(index)
            );


            optionsContainer.appendChild(
                button
            );

        }
    );
}


// ==================== ANSWER ====================

function selectAnswer(
    selectedIndex
) {

    if (gameEnded) {
        return;
    }


    const q =
        gameQuestions[
            currentQuestion
        ];


    const optionButtons =
        document.querySelectorAll(
            ".option-button"
        );


    optionButtons.forEach(
        button => {

            button.disabled = true;

        }
    );


    // ---------- CORRECT ----------

    if (
        selectedIndex ===
        q.answer
    ) {

        soundCorrect();


        score += 100;

        correctAnswers++;


        scoreDisplay.textContent =
            score;


        feedbackDisplay.textContent =
            "Correct! " +
            q.explanation;


        feedbackDisplay.className =
            "correct";
    }


    // ---------- WRONG ----------

    else {

        soundWrong();


        lives =
            Math.max(
                0,
                lives - 1
            );


        updateLivesDisplay();


        feedbackDisplay.textContent =
            "Wrong! " +
            q.explanation;


        feedbackDisplay.className =
            "wrong";
    }


    // ---------- GAME OVER ----------

    if (lives === 0) {

        setTimeout(
            () => {

                endGame("Game Over");

            },
            1200
        );

        return;
    }


    nextButton.classList.remove(
        "hidden"
    );
}


// ==================== NEXT QUESTION ====================

function nextQuestion() {

    if (gameEnded) {
        return;
    }


    currentQuestion++;

    showQuestion();
}


// ==================== SEND RESULT ====================

function sendResult(status) {

    const accuracy =
        Math.round(
            (
                correctAnswers /
                gameQuestions.length
            ) * 100
        );


    const timeTaken =
        180 - timeLeft;


    const data = {

        playerName:
            playerName,

        score:
            score,

        correctAnswers:
            correctAnswers,

        accuracy:
            accuracy,

        timeTaken:
            timeTaken,

        status:
            status

    };


    fetch(
        GOOGLE_SHEETS_URL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type":
                    "text/plain;charset=utf-8"
            },

            body:
                JSON.stringify(data)

        }
    )
    .catch(
        error => {

            console.error(
                "Could not send result:",
                error
            );

        }
    );
}


// ==================== END GAME ====================

function endGame(
    status = "Completed"
) {

    if (gameEnded) {
        return;
    }


    gameEnded = true;


    clearInterval(timer);


    soundFinish();


    quizScreen.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );


    resultName.textContent =
        "Player: " +
        playerName;


    finalScore.textContent =
        score;


    correctCount.textContent =
        correctAnswers +
        " / " +
        gameQuestions.length;


    const accuracy =
        Math.round(
            (
                correctAnswers /
                gameQuestions.length
            ) * 100
        );


    accuracyDisplay.textContent =
        accuracy;


    finalTime.textContent =
        180 - timeLeft;


    // Send result to Google Sheets

    sendResult(status);
}


// ==================== RESTART ====================

function restartGame() {

    clearInterval(timer);


    gameEnded = false;


    resultScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.add(
        "hidden"
    );

    startScreen.classList.remove(
        "hidden"
    );


    playerNameInput.value =
        "";

    feedbackDisplay.textContent =
        "";

    feedbackDisplay.className =
        "";


    currentQuestion = 0;

    score = 0;

    correctAnswers = 0;

    lives = 3;

    timeLeft = 180;

    gameQuestions = [];


    scoreDisplay.textContent =
        "0";

    timerDisplay.textContent =
        "180";

    updateLivesDisplay();
}