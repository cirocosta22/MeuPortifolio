import { Container } from './styles';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Container>
      <div className="container">
        <button>Voltar ao topo</button>
        <section>
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/cirocosta22')}
          />
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/ciro-pican%C3%A7o-2bb37422a/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}
