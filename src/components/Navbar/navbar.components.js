import { Link } from "react-router-dom"
import { Nav, NavOptions, Pages } from "./navbar.style"
// import logo from '../../assets/'

export default function Navbar() {
    return (
        <Nav>
            <Pages href='./'>
                <img src={'../../assets/logo.png'} alt='logo' />
            </Pages>
            <NavOptions>
                <Pages href="/">Home</Pages>
                <Pages href='./projects'>Projects</Pages>
                <Pages href='./company'>Company</Pages>
                <Pages href='./contact'>Contact</Pages>
            </NavOptions>

        </Nav>
    );
};