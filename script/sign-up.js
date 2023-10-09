import { signUpForm, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword} from "./elements.js"
const EMAIL_REGEX = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/
export default class SignUp {
    constructor(username, email, password, confirmpassword){
        this.username = username
        this.email = email
        this.password = password
        this.confirmpassword = confirmpassword
    }

}
export {EMAIL_REGEX}