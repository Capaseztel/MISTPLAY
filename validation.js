const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const passwordInput2 = document.querySelector('.pass-field2 input');
const eyeIcon2 = document.querySelector('.pass-field2 i');
const requirementsList = document.querySelectorAll('.requirement-list li');
const submitBtn = document.querySelector('.submit');
var allValid = false;
const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[A-Z]/, index: 1},
    {regex: /[0-9]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
]

function validateFormOnSubmit() {
    if (!allValid) {
        alert("Password is not valid");
        return false;
    } else {
        return true;
    }
}

passwordInput.addEventListener('keyup', (e) => {
    allValid = true;
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementsList[item.index];
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add('valid');
        } else {
            allValid = false;
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove('valid');
        }
    });
    if (allValid) {
        document.querySelector('.pass-field .fa-eye').style.color = "green";
    } else {
        document.querySelector('.pass-field .fa-eye').style.color = "red";
    }
});

passwordInput2.addEventListener('keyup', (e) => {
    if (passwordInput.value === e.target.value && !(e.target.value === "")) {
        document.querySelector('.pass-field2 .fa-eye').style.color = "green";
        allValid = true;
    } else {
        document.querySelector('.pass-field2 .fa-eye').style.color = "red";
        allValid = false;
    }
});

eyeIcon.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password' ? "" : '-slash'}`;
});

eyeIcon2.addEventListener('click', () => {
    passwordInput2.type = passwordInput2.type === 'password' ? 'text' : 'password';
    eyeIcon2.className = `fa-solid fa-eye${passwordInput2.type === 'password' ? "" : '-slash'}`;
});