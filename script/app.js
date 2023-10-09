import { loginForm, loginUsernameInput, loginPasswordInput, signUpForm, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword, loginEyeBtn } from "./elements.js";

import visibility from "./visibility.js";
visibility(loginEyeBtn)

import SignUp from "./sign-up.js";
signUpForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const signUp = new SignUp(`${signUpUsername.value}`, `${signUpEmail.value}`, `${signUpPassword.value}`, `${signUpConfirmPassword.value}`)
    console.log(signUp);
    localStorage.setItem("signup-data", JSON.stringify(signUp))
})

import { EMAIL_REGEX } from "./sign-up.js";