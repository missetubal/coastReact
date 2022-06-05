import styled from 'styled-components'

export const ContainerButton = styled.div`
   
`

export const ButtonSubmit = styled.button`
    background-color: ${props => props.backgroundColor || 'black'};
    color: ${props => props.color || 'white'};
    padding: 10px 25px;
    border-style: none;
    border-radius: 10px;
    margin-top: 40px;
    margin-left:20px;
    transition: 0.5s;
    :hover{
        background-color: #FFBB33;
    }

`