// object containing questions, options, and answer
var questions = [
    {
        title: "What does 'CSS' stand for?",
        options: ["Condescending Style Sheets", "Clean Styling System ", "Cascading Style Sheets", "Creedence Steer Swatter"],
        answers: "Cascading Style Sheets",
    },
    {
        title: "Which type of special characters are used to assign a string to a variable?",
        options: ["Quotation Marks", "Parentheses", "Curly Braces", "Pipe Operators"],
        answer: "Quotation Marks",
    },
    {
        title: "What function can be combined with the Math.random() function to give a random number greater than 1?",
        options: ["Math.ceiling", "Math.floor", "Math.greaterThan", "Math.trueRandom"],
        answer: "Math.floor",
    },
    {
        title: "The <li> tag can be used with which type of HTML List?",
        options: ["Ordered Lists", "Unordered Lists", "Neither", "Both"],
        answer: "Both",
    }
]

// variables to target page elements
var leaderboardEl = document.querySelector(".leaderboard");
var timerEl = document.querySelector(".timer");
var clock = document.querySelector(".clock");
var promptEl = document.querySelector(".prompt");
var startButton = document.querySelector(".startQuiz");
var questionsEl = document.querySelector(".questions");
var questionPromptEl = document.querySelector(".question-prompt");
var optionsEl = document.querySelector(".options");
var completedEl = document.querySelector(".quiz-complete");
var totalScoreEl = document.querySelector(".total-score");
var initialsEl = document.querySelector(".initials");

// variables that target question option buttons
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var submitButton = document.querySelector(".submitButton");

// variables to track time, questions array index value and add bonus time to final score
var questionIndex = 0;
var scoreCounter = 0;
var bonusTime = 0;

console.log(questionPromptEl);


// displays the first question and starts the clock
function startQuiz() {

    timeRemaining = 65;
    clock.textContent = timeRemaining;
    promptEl.style.display = "none";
    questionsEl.style.display = "block";
    

    var startTimer = setInterval(function() {
        timeRemaining--;
        clock.textContent = timeRemaining;

        if(timeRemaining === 0 || questionIndex === questions.length) {
            clearInterval(startTimer);
            bonusTime = timeRemaining;
            quizComplete();
        }
    }, 1000);

    loadQuestion(questionIndex);
};

// loads questions, prints the options to the screen, but for some reason not the question itself. 
function loadQuestion() {
    questionPromptEl.textContent = questions[questionIndex].title;
    console.log(questionPromptEl);
    option1.textContent = questions[questionIndex].options[0];
    option2.textContent = questions[questionIndex].options[1];
    option3.textContent = questions[questionIndex].options[2];
    option4.textContent = questions[questionIndex].options[3];
};

// checks to see if selected answer matches answer from answer bank, and adds or removes points accordingly. Advances the question index. 
function checkQuestion(answer) {
    
    if(questions[questionIndex].options[answer] === questions[questionIndex].answer) {
        scoreCounter += 10;
    } else {
        timeRemaining -= 15;
        clock.textContent = timeRemaining;
    }

    questionIndex++;

    if (questionIndex < questions.length) {
        loadQuestion();
    } 
};

// calculates users final score and displays it
function quizComplete() {

    scoreCounter += bonusTime;
    totalScoreEl.textContent = scoreCounter;

    questionsEl.style.display = "none";
    completedEl.style.display = "block";

};

// functions to make every choice button run the checkQuestion function
function check1() {
    checkQuestion(0);
};

function check2() {
    checkQuestion(1);
};

function check3() {
    checkQuestion(2);
};

function check4() {
    checkQuestion(3);
};


// event listeners for the start quiz button and the options buttons under each question 
startButton.onclick = startQuiz;

option1.onclick = check1;
option2.onclick = check2;
option3.onclick = check3;
option4.onclick = check4;

   