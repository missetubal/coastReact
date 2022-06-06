import { ButtonSubmit } from "./button.style"

export default function Button({text, handleOnClick}){
    return(
            <ButtonSubmit onClick={handleOnClick} on>{text}</ButtonSubmit>
    )
}