import { ButtonSubmit, ContainerButton } from "./button.style"

export default function Button({text}){
    return(
        <ContainerButton>
            <ButtonSubmit>{text}</ButtonSubmit>
        </ContainerButton>
    )
}