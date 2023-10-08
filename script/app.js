import { loginForm, loginUsernameInput, loginPasswordInput, signUpForm, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword, loginEyeBtn } from "./elements.js";

import visibility from "./visibility.js";
visibility(loginEyeBtn)

import { SignUpData } from "./datas.js"
const signupData = new SignUpData(`"${signUpUsername.value}", "${signUpEmail.value}", "${signUpPassword.value}", "${signUpConfirmPassword.value}"`)