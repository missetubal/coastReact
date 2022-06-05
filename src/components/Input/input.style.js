import styled from 'styled-components'

export const InputForm = styled.input`
    width: 50%;
    border-style: none;
    margin: 10px;
    padding: 10px;
    ::placeholder{
      color: #7b7b7b7b  
    }
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`
export const Label = styled.label`
    font-weight: bold;
    margin-left: 10px
`