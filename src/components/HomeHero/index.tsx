import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import picture from '../../assets/img.portifolio.jpeg'
import Image from 'next/image'

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <Image src={picture} alt="minha-foto" />
      <div>
        <TextContainer>
          <h1>Olá </h1>
          <h2>Me Chamo Ciro</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">Minha Apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Ciro</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Picanço</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-end</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  )
}
