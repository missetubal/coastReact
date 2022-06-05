import { InputContainer, Label, InputForm } from "./input.style";

export default function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <InputContainer>
            <Label htmlFor={name}>{text}: </Label>
            <InputForm 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </InputContainer>
    )
}