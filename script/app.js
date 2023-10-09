import { loginForm, loginUsernameInput, loginPasswordInput, signUpForm, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword, loginEyeBtn, emailChecker, passwordChecker, confirmChecker } from "./elements.js";

import visibility from "./visibility.js";
visibility(loginEyeBtn)

const DATA = JSON.parse(localStorage.getItem("signup-data"))
console.log(DATA);

const EMAIL_REGEX = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/

import SignUp from "./sign-up.js";
signUpForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    // const checkedEamil = EMAIL_REGEX.test(signUpEmail.value)
    // const checkPassword = PASSWORD_REGEX.test(signUpPassword.value)
    const signUp = new SignUp(signUpUsername.value, EMAIL_REGEX.test(signUpEmail.value) ? signUpEmail.value : "error", PASSWORD_REGEX.test(signUpPassword.value) ? signUpPassword.value : signUpPassword.style = "border: 4px solid red", signUpConfirmPassword.value == signUpPassword.value ? signUpConfirmPassword.value : signUpConfirmPassword.style = "border: 4px solid red")
    // console.log(signUp);
    localStorage.setItem("signup-data", JSON.stringify(signUp))
})