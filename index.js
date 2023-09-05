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

    console.log("HELLO WORLD Added By Hanzilla Naved")
}
