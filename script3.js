// Screens
let startScreen = document.getElementById("screen1");
let quizScreen = document.getElementById("screen2");
let resultScreen = document.getElementById("resultscreen");

// Buttons
let startButton = document.getElementById("startbutton");
let restartButton = document.getElementById("restartbutton");

// Quiz Elements
let questionText = document.getElementById("question1");
let answersContainer = document.getElementById("answers");
let currentQuestionSpan = document.getElementById("questionnumber");
let totalQuestionsSpan = document.getElementById("maxquestions");
let scoreSpan = document.getElementById("score");
let finalScoreSpan = document.getElementById("finalscore");
let maxScoreSpan = document.getElementById("maxscore");
let resultMessage = document.getElementById("resultmessage");
let progressBar = document.getElementById("progress");

// 🔹 MATH QUESTION POOL (10 QUESTIONS)
let allQuestions = [
  { question: "What is 7 + 8?", answers: [{text:"14",correct:false},{text:"15",correct:true},{text:"16",correct:false},{text:"17",correct:false}] },
  { question: "What is 12 × 6?", answers: [{text:"72",correct:true},{text:"68",correct:false},{text:"74",correct:false},{text:"70",correct:false}] },
  { question: "What is 81 ÷ 9?", answers: [{text:"8",correct:false},{text:"9",correct:true},{text:"10",correct:false},{text:"7",correct:false}] },
  { question: "What is the square of 11?", answers: [{text:"121",correct:true},{text:"111",correct:false},{text:"112",correct:false},{text:"110",correct:false}] },
  { question: "What is 15% of 200?", answers: [{text:"25",correct:false},{text:"30",correct:true},{text:"20",correct:false},{text:"35",correct:false}] },
  { question: "What is 3/5 of 50?", answers: [{text:"30",correct:true},{text:"25",correct:false},{text:"20",correct:false},{text:"35",correct:false}] },
  { question: "Solve for x: 2x + 5 = 15", answers: [{text:"4",correct:true},{text:"5",correct:false},{text:"6",correct:false},{text:"3",correct:false}] },
  { question: "What is the cube of 3?", answers: [{text:"9",correct:false},{text:"27",correct:true},{text:"18",correct:false},{text:"21",correct:false}] },
  { question: "What is the value of 2² + 3²?", answers: [{text:"12",correct:false},{text:"13",correct:true},{text:"10",correct:false},{text:"11",correct:false}] },
  { question: "If a rectangle has length 8 and width 5, what is its area?", answers: [{text:"40",correct:true},{text:"35",correct:false},{text:"45",correct:false},{text:"30",correct:false}] }
];

const QUESTIONS_PER_QUIZ = 5;
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = QUESTIONS_PER_QUIZ;
maxScoreSpan.textContent = QUESTIONS_PER_QUIZ;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", () => {
  resultScreen.style.display = "none";
  startQuiz();
});

function getRandomQuestions() {
  let selected = [];
  let usedIndexes = new Set();
  while (selected.length < QUESTIONS_PER_QUIZ) {
    let randomIndex = Math.floor(Math.random() * allQuestions.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      selected.push(allQuestions[randomIndex]);
    }
  }
  return selected;
}

function startQuiz() {
  quizQuestions = getRandomQuestions();
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.style.display = "none";
  quizScreen.style.display = "block";

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  let currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  currentQuestion.answers.sort(() => Math.random() - 0.5);

  progressBar.style.width =
    ((currentQuestionIndex) / QUESTIONS_PER_QUIZ) * 100 + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach(answer => {
    let btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    btn.dataset.correct = answer.correct;
    btn.addEventListener("click", selectAnswer);
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(e) {
  if (answersDisabled) return;
  answersDisabled = true;

  let selectedButton = e.target;
  let isCorrect = selectedButton.dataset.correct === "true";

  [...answersContainer.children].forEach(button => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    else if (button === selectedButton) button.classList.add("incorrect");
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.style.display = "none";
  resultScreen.style.display = "block";

  finalScoreSpan.textContent = score;
  progressBar.style.width = "100%";

  let percentage = (score / QUESTIONS_PER_QUIZ) * 100;

  if (percentage === 100) resultMessage.textContent = "Excellent! 🎉";
  else if (percentage >= 80) resultMessage.textContent = "Great job 👏";
  else if (percentage >= 60) resultMessage.textContent = "Good 👍";
  else if (percentage >= 40) resultMessage.textContent = "Try again 🙂";
  else resultMessage.textContent = "Keep practicing 📘";
}
