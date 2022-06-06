import styled from 'styled-components'

export const Container = styled.div``
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    margin-right: 20px;
`
export const Title = styled.h1`
    color: ${props => props.color || 'black'};
    font-size: 2.5em;
`
export const ContainerCard = styled.div`
    padding: 30px 50px;
    display: flex;
    flex-wrap: wrap;
`