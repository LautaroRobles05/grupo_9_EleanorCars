const passwordInput = document.getElementById("password");
const togglePasswordButton = document.getElementById("togglePassword");

togglePasswordButton.addEventListener("click", function () {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    const iconClass = type === "password" ? "fa-eye-slash" : "fa-eye";
    togglePasswordButton.setAttribute("class", `fas ${iconClass}`);
});

const confirmPasswordInput = document.getElementById("confirmPassword");
const toggleConfirmPasswordButton = document.getElementById("toggleConfirmPassword");

toggleConfirmPasswordButton.addEventListener("click", function () {
    const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
    confirmPasswordInput.setAttribute("type", type);

    const iconClass = type === "password" ? "fa-eye-slash" : "fa-eye";
    toggleConfirmPasswordButton.setAttribute("class", `fas ${iconClass}`);
});