const AVATAR_IMAGE = localStorage.getItem("avatarImage") 
const DATA = JSON.parse(localStorage.getItem("datas"))
const $authAvatar = document.getElementById("auth-avatar")
const $authUsername = document.getElementById("auth-username")
const $users = document.querySelectorAll(".users > div")
const $greetingContent = document.getElementById("greeting-content")
const robot = document.getElementById("robot")
const messagerAvatar = document.getElementById("messager-avatar")
const messagerUsername = document.getElementById("messager-username")
const messages = document.getElementById("messages")
const messageInput = document.getElementById("message-input")
const infoDiv = document.getElementById("info")
const messageForm = document.getElementById("message-form")
const greeting = document.getElementById("greeting")
const $chattingPage = document.querySelector(".chatting-page")
$authAvatar.src = AVATAR_IMAGE
$authUsername.textContent = DATA.username
$greetingContent.textContent = DATA.username

$users.forEach(user => {
    user.addEventListener("click", ()=>{
        robot.style.display = "none"
        greeting.style.display = "none"
        messages.style.display = "flex"
        infoDiv.style.display = "flex"
        messagerAvatar.src = user.firstElementChild.src
        messagerUsername.textContent = user.firstElementChild.nextElementSibling.textContent
        $chattingPage.classList = "starting"
        messageForm.style.display = "flex"
        messageForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const p = document.createElement("p")
    p.innerHTML = messageInput.value.trim()
    messages.style.display = "flex"
    messages.appendChild(p)
})
    })
})
