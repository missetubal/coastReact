import { useLocation, useNavigate } from "react-router-dom";
import Message from "../../components/Message/message";
import { Container, Title, Header, ContainerCard } from "./project.style";
import Button from "../../components/Button/button";
import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/projectCard";

export default function Projects() {

    const navigate = useNavigate()
    const location = useLocation();

    //fazer request dos projetos na db
    const [projects, setProject] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => resp.json())
            .then(data => setProject(data))
            .catch(err => console.log(err))
    }, [])



    let message = ''
    if (location.state) message = location.state.message
    function handleOnClick() {
        navigate('/newproject')
    }

    return (
        <Container>
            <Header>
                <Title>Meus Projetos</Title>
                <Button text={'Novo Projeto'} handleOnClick={handleOnClick} />
            </Header>
            {message && (<Message message={message} type='success' />)}
            <ContainerCard>
                {projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard projectData={project} />

                    ))
                )}
            </ContainerCard>

        </Container>

    )
}