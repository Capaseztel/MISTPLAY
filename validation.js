const passwordInput = document.querySelector('.pass-field input');
const eyeIcon = document.querySelector('.pass-field i');
const passwordInput2 = document.querySelector('.pass-field2 input');
const eyeIcon2 = document.querySelector('.pass-field2 i');
const requirementsList = document.querySelectorAll('.requirement-list li');

const requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[A-Z]/, index: 1},
    {regex: /[0-9]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
]

passwordInput.addEventListener('keyup', (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementsList[item.index];
        if (isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add('valid');
        } else {
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove('valid');
        }
    });
});

eyeIcon.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === 'password' ? "" : '-slash'}`;
});

eyeIcon2.addEventListener('click', () => {
    passwordInput2.type = passwordInput2.type === 'password' ? 'text' : 'password';
    eyeIcon2.className = `fa-solid fa-eye${passwordInput2.type === 'password' ? "" : '-slash'}`;
});