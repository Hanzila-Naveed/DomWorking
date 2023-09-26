/* const form = document.getElementById("Form")
const Add = document.getElementById("Add")
const AddElement = () => {
    const duplicateForm = document.importNode(form, true);
    document.getElementById("form-control").appendChild(duplicateForm);
}
Add.onclick = () => AddElement(); */
// Variables
let Switch = false;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const submitButton= document.getElementById("submit");
const reloadButton= document.getElementById('reload')
const toggleButton = document.getElementById("toggle");
const state={
    add:false
}
let questionIndex = 0;

// Functions
function toggleSwitchTransformFunction() {
    const quizContainer =document.getElementById("quiz-container")
    const toggleSwitchCircle = document.getElementById("circle")
    if (!Switch) {
        Switch = true
        toggleSwitchCircle.style.transform = "translateX(100%)"
        quizContainer.classList.add("quizContainer")
        document.body.classList.add("dark-mode");
        toggleButton.style.background = "black";
    } else {
        Switch = false
        toggleButton.style.background= "white";
        quizContainer.classList.remove("quizContainer")
        toggleSwitchCircle.style.transform = "translateX(0%)"
        document.body.classList.remove("dark-mode")
    }
}
function Quiz() {
    const quiz = document.getElementById("quiz");
    const output=[]
    allQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answer = [];
            for(const item of currentQuestion.options){
                answer.push(`<label class="label"><input type="radio" name ="question${questionNumber}" value="${item}"><span class="custom-radio-button"></span>${item}</label>`);
            }

            output.push(
                `<div class="slide">
    <div class="question animation a1"><h1> MCQ's for Javascript <h2> Question # ${currentQuestion.id} of ${allQuestions.length} </h2> <h4>${currentQuestion.question}</h4></h1></div>
    <div class="answer animation a1"> ${answer.join('')} </div>
    </div>` );
        }
    );
    quiz.innerHTML = output.join('');
}
function showQuestion(n) {
    const slides= document.querySelectorAll(".slide");
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
        AddButton();
    }
    else{
        nextButton.style.display = 'inline-flex';
        submitButton.style.display = 'none';
        reloadButton.style.display= 'none';
    }
}
function result(){
    const dialogBox = document.getElementById("dialogBox");
    const Yes = document.getElementById("yes");
    const No = document.getElementById("no");
    const active= document.getElementById('quiz')
    dialogBox.style.display="flex";
    Yes.onclick = ()=>{
        const Answers = document.querySelectorAll('.answer');
        const result = document.getElementById('myResults');
        let score = 0;
        state.add = true;
        submitButton.style.display = 'none';
        dialogBox.style.display= 'none';
        reloadButton.style.display='flex'
        allQuestions.forEach((currentQuestion, questionNumber) => {
            const CorrectAnswer = Answers[questionNumber]
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (CorrectAnswer.querySelector(selector) || {}).value;
            if (userAnswer === currentQuestion.answer) {
                score++;
            }else{
                const selectors = `.label input[name=question${questionNumber}]:checked + .custom-radio-button`
                const option = document.querySelector(selectors);
                option.style.background= 'red'
            }
        });
        if(score===allQuestions.length){
            const canvas= document.getElementById('drawing_canvas');
            canvas.style.display= 'flex';
        }
        result.innerHTML = `${fullName.firstName+' '+ fullName.lastName} your score is ${score} out of ${allQuestions.length}`;
        active.style.pointerEvents= 'none';

    }
    No.onclick =()=>{
        state.add=false;
        dialogBox.style.display="none";
    }
}
function AddButton(){
    if (!state.add){
        submitButton.style.display= 'inline-flex';
        reloadButton.style.display='none';
    }else{
        state.add= true;
        submitButton.style.display= 'none';
        reloadButton.style.display='inline-flex';
    }
}

function validateInput(id,error){
    const startQuiz= document.getElementById("startQuiz");
    const Name= document.getElementById(id).value.trim();
    const NameValidation= document.getElementById(`${id}Id`);
    const select= document.getElementById(id);
    if(!Name.match(`^(?:[A-Z]+|[A-Z][a-zA-Z]+)$`)){
        NameValidation.innerHTML = error
        NameValidation.style.display='flex';
        NameValidation.classList.add('name-validation');
        startQuiz.disabled = true;
        startQuiz.classList.add('nohover')
        select.style.borderColor= 'red';
        select.style.color= 'red';

    }else{
        NameValidation.style.display='none';
        select.style.borderColor= 'green';
        select.style.color= 'green';
        startQuiz.disabled = false;
    }
}
function NameValidation(id){
    const errorMessage = 'Please enter a valid name starting with an uppercase letter and containing uppercase and/or lowercase letters';
    validateInput(id, errorMessage)
}
const fullName={};
function Submission(){
    const startQuiz= document.getElementById("startQuiz");
    const firstName= document.getElementById("firstName").value.trim();
    const lastName= document.getElementById("lastName").value.trim();
    const formContainer= document.getElementById("form-container")
    const start= document.getElementById("container");
    const firstNameErrorMessage = 'Please Enter first Name';
    const lastNameErrorMessage = 'Please Enter last name';
    validateInput("firstName",firstNameErrorMessage);
    validateInput("lastName",lastNameErrorMessage);
    if(firstName && lastName){
        formContainer.style.display='none';
        start.classList.add('active','animation');
        startQuiz.disabled= false;
        fullName.firstName= FormatName(firstName);
        fullName.lastName= FormatName(lastName);
    }
}

const FormatName = (name)=>{
    const Name= name.toLowerCase();
    return Name.charAt(0).toUpperCase()+Name.slice(1)
}

//Sample Data
const allQuestions=[
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
// Function Calling
toggleButton.onclick = () => toggleSwitchTransformFunction();
Quiz();
showQuestion(questionIndex);
function showNext() {
    showQuestion(questionIndex+1);
}
function showPrevious() {
    showQuestion(questionIndex - 1);
}