import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Home from '../pages/Home/home.screen'
import Company from '../pages/Company/company.screen';
import NewProject from '../pages/NewProject/NewProject.screen';
import Navbar from '../components/Navbar/navbar.components';
import Projects from '../pages/Projects/projects.screen';
import Footer from '../components/Footer/footer.screen';

function RoutesNavigation() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/company'element={<Company/>} />
                <Route path='/newproject'element={<NewProject/>} />
                <Route path='/projects'element={<Projects/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default RoutesNavigation;
