// let startScreen = document.getElementById("screen1");
// let quizScreen = document.getElementById("screen2");
// let resultScreen = document.getElementById("resultscreen");
// let startButton = document.getElementById("startbutton");
// let questionText = document.getElementById("question1");
// let answersContainer = document.getElementById("answers");
// let currentQuestionSpan = document.getElementById("questionnumber");
// let totalQuestionsSpan = document.getElementById("maxquestions");
// let scoreSpan = document.getElementById("score");
// let finalScoreSpan = document.getElementById("finalscore");
// let maxScoreSpan = document.getElementById("maxscore");
// let resultMessage = document.getElementById("resultmessage");
// let restartButton = document.getElementById("restartbutton");
// let progressBar = document.getElementById("progress");


// let quizQuestions = [
//   {
//     question: "What is the longest river in the world??",
//     answers: [
//       { text: "krishna", correct: false },
//       { text: "ganga", correct: false },
//       { text: "nile", correct: true },
//       { text: "penna", correct: false },
//     ],
//   },
//   {
//     question: "Who painted the Mona Lisa??",
//     answers: [
//       { text: "Leonardo da Vecna", correct: false },
//       { text: "Leonardo da Vinci", correct: true },
//       { text: "leo da worren", correct: false },
//       { text: "leonardo vin", correct: false },
//     ],
//   },
//   {
//     question: "What is the smallest country in the world by land area??",
//     answers: [
//       { text: "mexcio", correct: false },
//       { text: "china", correct: false },
//       { text: "nigeria", correct: false },
//       { text: "vatican city", correct: true },
//     ],
//   },
//   {
//     question: "What is the capital city of Japan?",
//     answers: [
//       { text: "hiroshima", correct: false },
//       { text: "nagasaki", correct: false },
//       { text: "tokyo", correct: true },
//       { text: "japan itself", correct: false },
//     ],
//   },
//   {
//     question: "Which continent is known as the Dark Continent?",
//     answers: [
//       { text: "europe", correct: false },
//       { text: "australia", correct: false },
//       { text: "africa", correct: true },
//       { text: "asia", correct: false },
//     ],
//   },
// ];


// let currentQuestionIndex = 0;
// let score = 0;
// let answersDisabled = false;

// totalQuestionsSpan.textContent = quizQuestions.length;
// maxScoreSpan.textContent = quizQuestions.length;


// startButton.addEventListener("click", startQuiz);
// restartButton.addEventListener("click", restartQuiz);


// function startQuiz() {
//   currentQuestionIndex = 0;
//   score = 0;
//   scoreSpan.textContent = 0;

//   startScreen.style.display = "none";
//   quizScreen.style.display = "block";

//   showQuestion();
// }


// function showQuestion() {
//   answersDisabled = false;

//   let currentQuestion = quizQuestions[currentQuestionIndex];

//   currentQuestionSpan.textContent = currentQuestionIndex + 1;

//   let progressPercent =
//     (currentQuestionIndex / quizQuestions.length) * 100;
//   progressBar.style.width = progressPercent + "%";

//   questionText.textContent = currentQuestion.question;

//   answersContainer.innerHTML = "";

//   currentQuestion.answers.forEach((answer) => {
//     let button = document.createElement("button");
//     button.textContent = answer.text;
//     button.classList.add("answer-btn");

//     button.dataset.correct = answer.correct;

//     button.addEventListener("click", selectAnswer);

//     answersContainer.appendChild(button);
//   });
// }


// function selectAnswer(event) {
//   if (answersDisabled) return;
//   answersDisabled = true;

//   let selectedButton = event.target;
//   let isCorrect = selectedButton.dataset.correct === "true";

//   Array.from(answersContainer.children).forEach((button) => {
//     if (button.dataset.correct === "true") {
//       button.classList.add("correct");
//     } else if (button === selectedButton) {
//       button.classList.add("incorrect");
//     }
//   });

//   if (isCorrect) {
//     score++;
//     scoreSpan.textContent = score;
//   }

//   setTimeout(() => {
//     currentQuestionIndex++;

//     if (currentQuestionIndex < quizQuestions.length) {
//       showQuestion();
//     } else {
//       showResults();
//     }
//   }, 1000);
// }


// function showResults() {
//   quizScreen.classList.remove("active");
//   quizScreen.style.display = "none";
//   resultScreen.classList.add("active");

//   finalScoreSpan.textContent = score;

//   let percentage = (score / quizQuestions.length) * 100;

//   if (percentage === 100) {
//     resultMessage.textContent = "super your the best";
//   } else if (percentage >= 80) {
//     resultMessage.textContent = "great you are almost there!";
//   } else if (percentage >= 60) {
//     resultMessage.textContent = "good keep learning!";
//   } else if (percentage >= 40) {
//     resultMessage.textContent = "not bad try again!";
//   } else {
//     resultMessage.textContent = "go and study first!";
//   }
// }


// function restartQuiz() {
//   resultScreen.classList.remove("active");
//   startQuiz();
// }

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

// 🔹 QUESTION POOL (20 GENERAL KNOWLEDGE QUESTIONS)
let allQuestions = [
  { question: "What is the capital of France?", answers: [{text:"Berlin",correct:false},{text:"Madrid",correct:false},{text:"Paris",correct:true},{text:"Rome",correct:false}] },
  { question: "Which planet is known as the Red Planet?", answers: [{text:"Earth",correct:false},{text:"Mars",correct:true},{text:"Jupiter",correct:false},{text:"Venus",correct:false}] },
  { question: "Who wrote the national anthem of India?", answers: [{text:"Bankim Chandra",correct:false},{text:"Rabindranath Tagore",correct:true},{text:"Subhash Chandra Bose",correct:false},{text:"Mahatma Gandhi",correct:false}] },
  { question: "What is the largest ocean on Earth?", answers: [{text:"Atlantic",correct:false},{text:"Indian",correct:false},{text:"Pacific",correct:true},{text:"Arctic",correct:false}] },
  { question: "Which country is known as the Land of the Rising Sun?", answers: [{text:"China",correct:false},{text:"Japan",correct:true},{text:"Thailand",correct:false},{text:"Korea",correct:false}] },
  { question: "Who invented the telephone?", answers: [{text:"Thomas Edison",correct:false},{text:"Alexander Graham Bell",correct:true},{text:"Nikola Tesla",correct:false},{text:"Einstein",correct:false}] },
  { question: "What is the national animal of India?", answers: [{text:"Lion",correct:false},{text:"Elephant",correct:false},{text:"Tiger",correct:true},{text:"Leopard",correct:false}] },
  { question: "Which gas do plants absorb?", answers: [{text:"Oxygen",correct:false},{text:"Carbon Dioxide",correct:true},{text:"Nitrogen",correct:false},{text:"Hydrogen",correct:false}] },
  { question: "Who was the first Prime Minister of India?", answers: [{text:"Mahatma Gandhi",correct:false},{text:"Jawaharlal Nehru",correct:true},{text:"Sardar Patel",correct:false},{text:"Rajendra Prasad",correct:false}] },
  { question: "Which is the smallest continent?", answers: [{text:"Europe",correct:false},{text:"Australia",correct:true},{text:"Antarctica",correct:false},{text:"South America",correct:false}] },
  { question: "What is the hardest natural substance?", answers: [{text:"Iron",correct:false},{text:"Diamond",correct:true},{text:"Gold",correct:false},{text:"Silver",correct:false}] },
  { question: "Which organ purifies blood?", answers: [{text:"Heart",correct:false},{text:"Kidney",correct:true},{text:"Lungs",correct:false},{text:"Liver",correct:false}] },
  { question: "Who discovered gravity?", answers: [{text:"Einstein",correct:false},{text:"Newton",correct:true},{text:"Galileo",correct:false},{text:"Tesla",correct:false}] },
  { question: "Which is the longest river in the world?", answers: [{text:"Amazon",correct:false},{text:"Nile",correct:true},{text:"Yangtze",correct:false},{text:"Mississippi",correct:false}] },
  { question: "What is the national flower of India?", answers: [{text:"Rose",correct:false},{text:"Lotus",correct:true},{text:"Sunflower",correct:false},{text:"Jasmine",correct:false}] },
  { question: "Which metal is liquid at room temperature?", answers: [{text:"Iron",correct:false},{text:"Mercury",correct:true},{text:"Copper",correct:false},{text:"Aluminium",correct:false}] },
  { question: "How many continents are there?", answers: [{text:"5",correct:false},{text:"6",correct:false},{text:"7",correct:true},{text:"8",correct:false}] },
  { question: "Which country gifted the Statue of Liberty?", answers: [{text:"Germany",correct:false},{text:"France",correct:true},{text:"Italy",correct:false},{text:"Canada",correct:false}] },
  { question: "Which vitamin comes from sunlight?", answers: [{text:"Vitamin A",correct:false},{text:"Vitamin C",correct:false},{text:"Vitamin D",correct:true},{text:"Vitamin B",correct:false}] },
  { question: "Which is the largest desert in the world?", answers: [{text:"Sahara",correct:false},{text:"Gobi",correct:false},{text:"Antarctica",correct:true},{text:"Kalahari",correct:false}] }
];

const QUESTIONS_PER_QUIZ = 5;

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = QUESTIONS_PER_QUIZ;
maxScoreSpan.textContent = QUESTIONS_PER_QUIZ;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);

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
  resultScreen.style.display = "none";
  quizScreen.style.display = "block";

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;

  let currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  progressBar.style.width =
    ((currentQuestionIndex + 1) / QUESTIONS_PER_QUIZ) * 100 + "%";

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
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
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

  let percentage = (score / QUESTIONS_PER_QUIZ) * 100;

  if (percentage === 100) resultMessage.textContent = "Excellent! 🎉";
  else if (percentage >= 80) resultMessage.textContent = "Great job 👏";
  else if (percentage >= 60) resultMessage.textContent = "Good 👍";
  else if (percentage >= 40) resultMessage.textContent = "Try again 🙂";
  else resultMessage.textContent = "Keep practicing 📘";
}
