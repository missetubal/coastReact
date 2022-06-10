import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
    margin-bottom: 2em;
`
// `
export const Text = styled.p`
    color: ${props => props.type === 'success' ? '#155724' : '#721C24'};
    background-color: ${props => props.type === 'success' ? '#D4EDDA' : '#F8D7DA'};
    border-color: ${props => props.type === 'success' ? '#C3E6CB' : '#F5C6CB'};
    font-size: 20px;
    padding: 0.5em;
`