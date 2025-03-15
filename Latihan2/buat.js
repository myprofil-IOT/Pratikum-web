const questions = [
    { question: "Siapakah komender pertama di macig chess go go?", options: ["Lancelot", "Kagura", "Ling", "Layla"], correct: 2 },
    { question: "Apa combo sinergi terkuat di macig chess go go?", options: ["6 Dragon Altar + 4 Swordsman", "6 Nature Spirit", "6 Dragon Altar + 3Support", "6 Mage"], correct: 0 },
    { question: "Berapa jumlah pemain dalam satu tim di mode rank di macig chess go go?", options: ["3", "4", "5", "6"], correct: 1 }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    document.getElementById("feedback").innerText = "";
    document.getElementById("feedback").style.opacity = "0";
    document.getElementById("nextBtn").disabled = true;

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-primary");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    const feedback = document.getElementById("feedback");
    if (selectedIndex === q.correct) {
        feedback.innerText = "Jawaban Benar!";
        feedback.classList.add("text-success");
    } else {
        feedback.innerText = "Jawaban Salah!";
        feedback.classList.add("text-danger");
    }
    feedback.style.opacity = "1";
    document.getElementById("nextBtn").disabled = false;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    loadQuestion();
});

loadQuestion();