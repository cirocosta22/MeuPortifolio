import { ReactNode } from 'react';

import { Container } from './styles';
import { SectionTitle } from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="#1 ano" description="de experiência" />
      <section>
        <ExperienciaItem
          year="2022"
          title="dev Front-End"
          description="Desenvolvendo projetos freelances desde o começo de 2022 , estagiei como front-end pela empresa alphatec onde pude colaborar com o crescimento da empresa . atualmente cursando engenharia de software"
        />
      </section>
    </Container>
  );
}
