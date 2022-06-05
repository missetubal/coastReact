import { SelectContainer, SelectInput, Label, Option } from "./select.style";

export default function Select({text, name, options, handleOnChange, value}){
    return(
        <SelectContainer>
             <Label htmlFor={name}>{text}: </Label>
             <SelectInput name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <Option>Selecione uma categoria</Option>
                {options.map((item)=>(
                    <Option value={item.id} key={item.id}>{item.name}</Option>
                ))}
             </SelectInput>
        </SelectContainer>
    )
}