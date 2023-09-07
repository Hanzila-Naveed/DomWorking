const form = document.getElementById("Form")
const Add = document.getElementById("Add")
const AddElement = () => {
    console.log("as")
    const duplicateForm = document.importNode(form, true);
    document.getElementById("form-control").appendChild(duplicateForm);
}
Add.onclick = () => AddElement();
let Switch = false;
let toggleButton = document.getElementById("toggle")
let toggleSwitchCircle = document.getElementById("circle")
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous")
toggleButton.onclick = () => toggleSwitchTransformFunction();

function toggleSwitchTransformFunction() {
    if (!Switch) {
        Switch = true
        toggleSwitchCircle.style.transform = "translateX(100%)"
        document.body.classList.add("dark-mode");
    } else {
        Switch = false
        toggleSwitchCircle.style.transform = "translateX(0%)"
        document.body.classList.remove("dark-mode")
    }

}

// allQuestions.forEach(function(item, index) {
//
//     console.log(item.question);
//     let count=0
//     while(count < item.options.length){
//         console.log(item.options[count])
//         count++;
//     }
// });
// for (const item of allQuestions) {
//     console.log(item.question);
//     let count = 0
//     while(count< item.options.length){
//         console.log(item.options[count])
//         count++;
//     }
// }
let allQuestions=[
    {
        id:1,
        question: "What is your age?",
        options:[ 2,4,6,8],
        answer: 6

    },
    {
        id:2,
        question: "what is your favourite animal?",
        options:[ "cat","dog","horse"],
        answer: "horse"
    },
]
let questionIndex = 0;
function showQuestion() {
    let question = document.getElementById("questions");
    let select= document.getElementById("options");
    question.innerHTML = allQuestions[questionIndex].question;
    let count = 0
    select.innerHTML=""
    while(count< allQuestions[questionIndex].options.length){
        let opt=allQuestions[questionIndex].options[count]
        select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
        count++;
}
}
showQuestion();
const togglePrev = () => {
    const method = questionIndex === 0 ? 'add' : 'remove';
    prevButton.classList[method]("disable");
}
const toggleNext = () => {
    const method = questionIndex === allQuestions.length - 1 ? 'add' : 'remove';
    nextButton.classList[method]("disable");
}
const nextQuestion= ()=> {
    if(questionIndex< allQuestions.length-1){
        questionIndex++;
        showQuestion();
    }
    toggleNext();
    togglePrev();
}
const previousQuestion= ()=> {
    if(questionIndex > 0){
        questionIndex--;
        showQuestion();
    }
    toggleNext();
    togglePrev();
}
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", previousQuestion)

