import { ReactNode } from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import { Container } from './styles';
import { SectionTitle } from '../SectionTitle/';
import ConhecimentoItem from './ConhecimentoItem';

export function Conhecimentos() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Java Script" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="Type Script" icon={<SiTypescript />} />
        <ConhecimentoItem title="Next Js" icon={<SiNextdotjs />} />
      </section>
    </Container>
  );
}
