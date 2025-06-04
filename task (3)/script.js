// Quiz Questions
const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyper Tool Markup Line"], answer: "Hyper Text Markup Language" },
  { question: "Which language runs in a web browser?", options: ["Python", "C", "JavaScript"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Syntax"], answer: "Cascading Style Sheets" },
  { question: "Which tag is used for links in HTML?", options: ["<link>", "<a>", "<href>"], answer: "<a>" },
  { question: "Which symbol is used for comments in JS?", options: ["//", "<!-- -->", "##"], answer: "//" }
];

let current = 0;
let score = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) score++;
  document.getElementById("score").innerText = `Score: ${score}/${questions.length}`;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    alert("Quiz Completed! Your final score is: " + score);
  }
}

window.onload = showQuestion;

// Joke Generator (3 jokes)
function getJokes() {
  const jokeList = document.getElementById("joke-list");
  jokeList.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => {
        const jokeItem = document.createElement("p");
        jokeItem.innerText = data.value;
        jokeList.appendChild(jokeItem);
      })
      .catch(err => {
        jokeList.innerHTML += "<p>Failed to fetch joke.</p>";
      });
  }
}
