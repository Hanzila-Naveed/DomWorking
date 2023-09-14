/* const form = document.getElementById("Form")
const Add = document.getElementById("Add")
const AddElement = () => {
    const duplicateForm = document.importNode(form, true);
    document.getElementById("form-control").appendChild(duplicateForm);
}
Add.onclick = () => AddElement(); */
let Switch = false;
let toggleButton = document.getElementById("toggle")
let toggleSwitchCircle = document.getElementById("circle")
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");
let submitButton= document.getElementById("submit")
let mcqs =document.getElementById("MCQS")
toggleButton.onclick = () => toggleSwitchTransformFunction();
function toggleSwitchTransformFunction() {
    if (!Switch) {
        Switch = true
        toggleSwitchCircle.style.transform = "translateX(100%)"
        mcqs.classList.add("mcqs")
        document.body.classList.add("dark-mode");
        toggleButton.style.background = "white";
    } else {
        Switch = false
        toggleButton.style.background= "black";
        mcqs.classList.remove("mcqs")
        toggleSwitchCircle.style.transform = "translateX(0%)"
        document.body.classList.remove("dark-mode")
    }
}
let allQuestions=[
    {
        id:1,
        question: "Which of the following variables takes precedence over the others if the names are the same?",
        options: [
            "Global variable",
            "The local element",
            "The two of the above"
        ],
        answer: "The local element"

    },
    {
        id:2,
        question: "Which one of the following also known as Conditional Expression ",
        options:[ "Immediate if","Switch statement","If-then-else statement"],
        answer: "Immediate if"
    },
    {
        id:3,
        question: "Which type of JavaScript language is",
        options:[ "Object-Oriented","Object-Based","Assembly-language","High-level"],
        answer: "Object-Based"
    },
]
function Quiz() {
    const quiz = document.getElementById("quiz");
    const output=[]
    allQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answer = [];
            for(const item of currentQuestion.options){
                answer.push(`<label><input type="radio" name ="question${questionNumber}" value="${item}">${item}</label>`);
            }
            output.push(
                `<div class="slide">
    <div class="question"><h1> MCQ's for Javascript: <h2> Question # ${currentQuestion.id} of ${allQuestions.length} </h2> <h4>${currentQuestion.question}</h4></h1></div>
    <div class="answer"> ${answer.join('')} </div>
    </div>` );
        }
    );
    quiz.innerHTML = output.join('');
}
Quiz();
const slides= document.querySelectorAll(".slide");
let questionIndex = 0;
function showQuestion(n) {
    const buttonGroup=document.getElementById("buttons")
    slides[questionIndex].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    questionIndex = n;
    if(questionIndex===0){
        prevButton.style.display = 'none';
        buttonGroup.style.justifyContent = "end";
    }
    else{
        buttonGroup.style.justifyContent = "space-between";
        prevButton.style.display = 'inline-flex';
    }
    if(questionIndex === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-flex';
    }
    else{
        nextButton.style.display = 'inline-flex';
        submitButton.style.display = 'none';
    }
}
function showNext() {
    showQuestion(questionIndex+1);
}
function showPrevious() {
    showQuestion(questionIndex - 1);
}
showQuestion(questionIndex);
function result(){
    const Answers = document.querySelectorAll('.answer');
    const result = document.getElementById('myResults')
    let score= 0;
    allQuestions.forEach( (currentQuestion, questionNumber) => {
        const CorrectAnswer= Answers[questionNumber]
        const selector =`input[name=question${questionNumber}]:checked`;
        const userAnswer = (CorrectAnswer.querySelector(selector) || {}).value;
        if(userAnswer===currentQuestion.answer){
            score++;
            Answers[questionNumber].style.color = 'lightgreen';
        }else{
            Answers[questionNumber].style.color = 'red';
        }
    });
    result.innerHTML=`${score} out of ${allQuestions.length}`;
}