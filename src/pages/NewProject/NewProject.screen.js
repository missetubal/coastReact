import { useNavigate } from "react-router-dom";
import Forms from "../../components/Forms/forms";
import { Container, Title, Text } from "./NewProject.style";

export default function NewProject(){

    const navigate = useNavigate();
    function createPost(project){
        project.cost = 0;
        project.services=[]
        fetch('http://localhost:5000/projects',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp=>resp.json())
        .then(data => navigate('/projects', {message: 'Projeto criado com sucesso'}))
        .catch(err => console.log(err))
    }

    return(
        <Container>
            <Title>Criar Projeto</Title>
            <Text>Crie o projeto para que possa adicionar serviços</Text>
            <Forms handleSubmit={createPost}/>
        </Container>
    )
}
