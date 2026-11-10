const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const charCount = document.getElementById("charCount");
const successMessage = document.getElementById("successMessage");
function checkName() {
    if (nameInput.value.trim().length < 3) {
        nameError.textContent = "Name must be at least 3 letters.";
        nameInput.className = "invalid";
        return false;
    }
    nameError.textContent = "";
    nameInput.className = "valid";
    return true;
}
function checkEmail() {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        emailInput.className = "invalid";
        return false;
    }
    emailError.textContent = "";
    emailInput.className = "valid";
    return true;
}
function checkMessage() {
    charCount.textContent = messageInput.value.length + " / 200";

    if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        messageInput.className = "invalid";
        return false;
    }
    messageError.textContent = "";
    messageInput.className = "valid";
    return true;
}
nameInput.addEventListener("input", checkName);
emailInput.addEventListener("input", checkEmail);
messageInput.addEventListener("input", checkMessage);
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameOk = checkName();
    const emailOk = checkEmail();
    const messageOk = checkMessage();

    if (nameOk && emailOk && messageOk) {
        successMessage.classList.add("show");
        form.reset();
        nameInput.className = "";
        emailInput.className = "";
        messageInput.className = "";
        charCount.textContent = "0 / 200";
    } else {
        successMessage.classList.remove("show");
    }
});