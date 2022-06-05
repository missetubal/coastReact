import { Container, ImageContainer, Link, Span, Text, TextContainer, Title } from "./home.style";
import savings from '../../assets/savings.svg';

export default function Home() {
    return (
        <Container>
            <TextContainer>
                <Title>Bem-Vindo ao <Span>Costs</Span></Title>
                <Text>Comece a gerenciar os seus projetos agora mesmo!</Text>
                <Link href="/newproject">Criar Projeto</Link>
            </TextContainer>
            <img src={savings} alt='savings' />
        </Container>


    )
}
