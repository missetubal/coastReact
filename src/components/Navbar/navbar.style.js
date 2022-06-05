import styled from "styled-components";


export const Nav = styled.nav`
    display: flex;
    background-color: #222;
    justify-content: space-between;
    padding: 1em;
    align-items: center;
`
export const NavOptions = styled.ul`
    list-style: none;
    padding: 5px;
    margin-right: 10px;
`
export const Pages = styled.a`
    color: white;
    margin: 10px;
    text-decoration: none;
    text-transform: uppercase;
    :hover{
        color: gray;
    }
`
