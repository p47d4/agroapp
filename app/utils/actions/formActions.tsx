import { validateString, validateEmail,validatePassword } from "../ValidationConstraints"

export const validateInput = (inputId, inputValue) => {
    if(inputId === "fullName") {
        return validateString(inputId, inputValue)
    } else if(inputId === "email"){
        return validateEmail(inputId, inputValue)
    } else if(inputId === "phone"){
        return validateEmail(inputId, inputValue)
    } else if(inputId === "voterid"){
        return validateEmail(inputId, inputValue)
    } else if(inputId === "password" || inputId === "confrimPassword"){
        return validatePassword(inputId, inputValue)
    } 
}
