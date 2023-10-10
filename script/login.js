const loginForm = document.getElementById("form")
const loginUsernameInput = document.getElementById("username")
const loginPasswordInput = document.getElementById("password")
const loginEyeBtn = document.getElementById("eye-btn")
const usernameChecker = document.getElementById("usernameChecker")
const passwordChecker = document.getElementById("passwordChecker")
const DATA = JSON.parse(localStorage.getItem("datas")) || []

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(loginUsernameInput.value == DATA.username && loginPasswordInput.value == DATA.password){
        location.replace(location.origin + "/pages/images.html")
    }else{
        console.log("error");
    }
})