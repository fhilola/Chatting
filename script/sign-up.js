import { signUpForm, signUpUsername, signUpEmail, signUpPassword, signUpConfirmPassword, emailChecker, passwordChecker, confirmChecker} from "./elements.js"

export default class SignUp {
    constructor(username, email, password, confirmpassword){
        this.username = username
        this.email = email
        this.password = password
        this.confirmpassword = confirmpassword
    }
}