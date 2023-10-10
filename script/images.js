const wrapper = document.querySelector(".wrapper")
const images = document.querySelectorAll("img")
const chooseButton = document.getElementById("choose-photo")
const error = document.getElementById("error")
images.forEach(image => {
    image.addEventListener("click", ()=>{
        const src = image.getAttribute("src")
        localStorage.setItem("avatarImage", src)
        image.style = "border: 4px solid #4D0EFF; border-radius: 50%"
    })
})
const AVATAR_IMAGE = localStorage.getItem("avatarImage") 
console.log(AVATAR_IMAGE);
chooseButton.addEventListener("click", ()=>{
    if(AVATAR_IMAGE){
        location.replace(location.origin + "/pages/chatting.html")
    }else{
        error.textContent = "Choose Photo"
        error.style = "display: block; color: lightgreen"
    }
})