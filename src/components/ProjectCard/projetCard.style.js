import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #222;
    width: 30%;
    padding: 10px;
    margin: 20px;
`
export const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`
export const Text = styled.p`
    font-weight: ${props=>props.fontWeight || 'normal'};
`
export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
export const ButtonContainer= styled.div`
    text-align: center;
    margin-bottom: 20px;
`