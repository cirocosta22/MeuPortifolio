import { ReactNode } from 'react';

import { Container } from './styles';
import { HandleSubmit } from '../FormContato/Form';
import { SectionTitle } from '../SectionTitle';

interface FormContatoProps {
  children: ReactNode;
}

export function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br />
            meus serviços?
          </>
        }
        description={
          <>
            Preencha o Formulário Abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <HandleSubmit />
    </Container>
  );
}
