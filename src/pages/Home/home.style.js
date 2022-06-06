import styled from 'styled-components'

export const Container = styled.body`
    width: 100%;
    align-items: center;
    text-align: center;
`

export const Title = styled.h1`
    color: ${props => props.color || 'black'};
    margin: 15px;
    font-size: 2.5em;
`
export const Text = styled.p`
    color: #7b7b7b;
    margin-left: ${props => props.marginLeft || 0}px;
    margin-bottom: 30px;
`
export const Link = styled.a`
    background-color: #222;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 10px;
    transition: 0.5s;
    :hover{
        background-color: #FFBB33;
    }
`
export const TextContainer = styled.div`
    margin-bottom: 10px;
`
export const Span = styled.span`
    color: #FFBB33;
    padding: 0.1em 0.2em;
    background-color: black;
    border-radius: 10px;
`