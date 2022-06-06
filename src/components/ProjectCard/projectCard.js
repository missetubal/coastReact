import Button from "../Button/button";
import { ButtonContainer, Container, Text, TextContainer, Title } from "./projetCard.style";

export default function ProjectCard({ projectData }) {
    return (
        <Container>
            
            <Title>{projectData.name}</Title>

            <TextContainer>
                <Text fontWeight={'bold'}>Custos</Text>
                <Text>R${projectData.coast}</Text>
            </TextContainer>

            <TextContainer>
                <Text fontWeight={'bold'}>Orçamento</Text>
                <Text>R${projectData.budget}</Text>
            </TextContainer>

            <TextContainer>
                <Text fontWeight={'bold'}>Categoria</Text>
                <Text>{projectData.category.name}</Text>
            </TextContainer>
            
            <ButtonContainer>
                <Button text={'Editar Projeto'} />
            </ButtonContainer>
        </Container>
    )
}