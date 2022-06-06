import styled from 'styled-components'

export const Container = styled.body`
    margin: 0 10px;
    padding: 3em;

`
export const Title = styled.h1`
    color: ${props => props.color || 'black'};
    font-size: 2.5em;
`
export const Text = styled.p`
    color: #7b7b7b;
    margin: 25px 10px;
`