const startScreen = document.getElementById("screen1");
const quizScreen = document.getElementById("screen2");
const resultScreen = document.getElementById("resultscreen");
const startButton = document.getElementById("startbutton");
const restartButton = document.getElementById("restartbutton");
const questionText = document.getElementById("question1");
const answersContainer = document.getElementById("answers");
const currentQuestionSpan = document.getElementById("questionnumber");
const totalQuestionsSpan = document.getElementById("maxquestions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("finalscore");
const maxScoreSpan = document.getElementById("maxscore");
const resultMessage = document.getElementById("resultmessage");
const progressBar = document.getElementById("progress");
const questionPool = [
  { question: "How many centuries has Virat Kohli scored?", answers: [{text:"89",correct:false},{text:"76",correct:false},{text:"84",correct:true},{text:"81",correct:false}] },
  { question: "Who is current Indian T20I captain?", answers: [{text:"Rohit Sharma",correct:false},{text:"Suryakumar Yadav",correct:true},{text:"Virat Kohli",correct:false},{text:"Hardik Pandya",correct:false}] },
  { question: "How many trophies does RCB have?", answers: [{text:"0",correct:true},{text:"1",correct:false},{text:"3",correct:false},{text:"5",correct:false}] },
  { question: "Which player is called Hitman?", answers: [{text:"Virat Kohli",correct:false},{text:"Rohit Sharma",correct:true},{text:"Dhoni",correct:false},{text:"KL Rahul",correct:false}] },
  { question: "ODI full form?", answers: [{text:"One Day Internationals",correct:true},{text:"One Dream India",correct:false},{text:"Only Day India",correct:false},{text:"One Danger Interval",correct:false}] },
  { question: "Who won WC 2011?", answers: [{text:"India",correct:true},{text:"Australia",correct:false},{text:"Sri Lanka",correct:false},{text:"England",correct:false}] },
  { question: "Fastest century in ODIs?", answers: [{text:"AB de Villiers",correct:true},{text:"Gayle",correct:false},{text:"Rohit",correct:false},{text:"Virat",correct:false}] },
  { question: "Who is called Captain Cool?", answers: [{text:"MS Dhoni",correct:true},{text:"Virat Kohli",correct:false},{text:"Rohit Sharma",correct:false},{text:"Rahul Dravid",correct:false}] },
  { question: "IPL started in which year?", answers: [{text:"2008",correct:true},{text:"2006",correct:false},{text:"2010",correct:false},{text:"2012",correct:false}] },
  { question: "Most IPL titles?", answers: [{text:"MI",correct:true},{text:"CSK",correct:false},{text:"KKR",correct:false},{text:"RR",correct:false}] },
  { question: "Who won WC 2019?", answers: [{text:"England",correct:true},{text:"India",correct:false},{text:"Australia",correct:false},{text:"NZ",correct:false}] },
  { question: "RCB captain 2024?", answers: [{text:"Faf du Plessis",correct:true},{text:"Virat Kohli",correct:false},{text:"Maxwell",correct:false},{text:"Siraj",correct:false}] },
  { question: "Most double centuries in ODIs?", answers: [{text:"Rohit Sharma",correct:true},{text:"Sachin",correct:false},{text:"Virat",correct:false},{text:"Sehwag",correct:false}] },
  { question: "Who is God of Cricket?", answers: [{text:"Sachin Tendulkar",correct:true},{text:"Virat Kohli",correct:false},{text:"Dhoni",correct:false},{text:"Rohit",correct:false}] },
  { question: "T20 WC 2024 winner?", answers: [{text:"India",correct:true},{text:"Australia",correct:false},{text:"England",correct:false},{text:"SA",correct:false}] },
  { question: "Orange cap holder IPL 2023?", answers: [{text:"Shubman Gill",correct:true},{text:"Virat Kohli",correct:false},{text:"Warner",correct:false},{text:"Buttler",correct:false}] },
  { question: "Who hit 264 in ODIs?", answers: [{text:"Rohit Sharma",correct:true},{text:"Virat Kohli",correct:false},{text:"Sehwag",correct:false},{text:"Gayle",correct:false}] },
  { question: "Most sixes in internationals?", answers: [{text:"Chris Gayle",correct:true},{text:"Rohit",correct:false},{text:"Virat",correct:false},{text:"Dhoni",correct:false}] },
  { question: "First T20 WC winner?", answers: [{text:"India",correct:true},{text:"Australia",correct:false},{text:"England",correct:false},{text:"Pakistan",correct:false}] },
  { question: "Who won IPL 2023?", answers: [{text:"CSK",correct:true},{text:"GT",correct:false},{text:"MI",correct:false},{text:"RCB",correct:false}] }
];

let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

const QUESTIONS_PER_QUIZ = 5;

totalQuestionsSpan.textContent = QUESTIONS_PER_QUIZ;
maxScoreSpan.textContent = QUESTIONS_PER_QUIZ;


startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", startQuiz);

function getRandomQuestions() {
  const selected = [];
  const usedIndexes = new Set();

  while (selected.length < QUESTIONS_PER_QUIZ) {
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      selected.push(questionPool[randomIndex]);
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

  const q = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  progressBar.style.width =
    ((currentQuestionIndex + 1) / QUESTIONS_PER_QUIZ) * 100 + "%";

  questionText.textContent = q.question;
  answersContainer.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
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

  const selected = e.target;
  const isCorrect = selected.dataset.correct === "true";

  [...answersContainer.children].forEach(btn => {
    if (btn.dataset.correct === "true") btn.classList.add("correct");
    else if (btn === selected) btn.classList.add("incorrect");
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

  const percent = (score / QUESTIONS_PER_QUIZ) * 100;
  resultMessage.textContent =
    percent >= 80 ? "🔥 Excellent!" :
    percent >= 60 ? "👍 Good!" :
    percent >= 40 ? "🙂 Try again!" :
    "📘 Practice more!";
}
