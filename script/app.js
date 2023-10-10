const EMAIL_REGEX = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/

const signUpForm = document.getElementById("signForm")
const signUpUsername = document.getElementById("sign-up-username")
const signUpEmail = document.getElementById("sign-up-email")
const signUpPassword = document.getElementById("sign-up-password")
const signUpConfirmPassword = document.getElementById("sign-up-confirm-password")
const usernameChecker = document.getElementById("usernameChecker")
const emailChecker = document.getElementById("emailChecker")
const passwordChecker = document.getElementById("passwordChecker")
const confirmChecker = document.getElementById("confirmChecker")
const smthWrong = document.getElementById("smth-wrong")
signUpUsername.addEventListener("input", (e)=>{
    if(signUpUsername.value.trim().length > 1){
        usernameChecker.style.display = "none"
    }else{
        usernameChecker.textContent = "Username should involve more than 1 letter"
        usernameChecker.style = "display: block; color: red; font-size: 16px"
    }
})
signUpEmail.addEventListener("input", (e)=>{
    const emailChecking = EMAIL_REGEX.test(signUpEmail.value)
    if(emailChecking == false){
        emailChecker.textContent = "email is not valid"
        emailChecker.style = "display: block; color: red; font-size: 16px"
    }
    else{
        return true
    }
})

signUpPassword.addEventListener("input", ()=>{
    const passwordChecking = PASSWORD_REGEX.test(signUpPassword.value)
    if(passwordChecking == false){
        passwordChecker.textContent = "password is incorrect"
        passwordChecker.style = "display: block; color: red; font-size: 16px"
    }else{
        passwordChecker.style.display = "none"
    }
})
signUpConfirmPassword.addEventListener("input", ()=>{
    if(signUpConfirmPassword.value == signUpPassword.value){
        confirmChecker.style.display = "none"
    }else{
        confirmChecker.textContent = "password is incorrect"
        confirmChecker.style = "display: block; color: red; font-size: 16px"
    }
})
signUpForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(signUpUsername.value && signUpEmail.value && signUpPassword.value && signUpConfirmPassword.value){
        var signUpData = {
            username: signUpUsername.value,
            email: signUpEmail.value,
            password: signUpPassword.value,
            confirm: signUpConfirmPassword.value
        }
        localStorage.setItem("datas", JSON.stringify(signUpData))
        location.replace(location.origin + "/index.html")
    }else{
        smthWrong.textContent = "there is something wrong!"
        smthWrong.style = "display: block; color: red"
    }
})