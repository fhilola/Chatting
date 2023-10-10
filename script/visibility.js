function visibility (loginEyeBtn){
    loginEyeBtn.addEventListener("click", (e)=>{
        e.preventDefault()
        if(e.target.closest("#eye-btn").previousElementSibling.type === "password"){
            e.target.closest("#eye-btn").previousElementSibling.type = "text"
            e.target.closest("#eye-btn").classList = "fa-solid fa-eye-slash"
        }
        else{
            e.target.closest("#eye-btn").previousElementSibling.type = "password"
            e.target.closest("#eye-btn").classList = "fa-solid fa-eye"
            e.target.closest("#eye-btn").style = "height: 69px; background: transparent; border: 4px solid #342479; border-left: none; border-top-left-radius: 0; border-bottom-left-radius: 0"
        }
    })
}