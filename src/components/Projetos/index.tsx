import { ReactNode } from 'react'
import Link from 'next/link'
import { Container } from './styles'
import { SectionTitle } from '../SectionTitle/'
import ProjetoItem from './ProjetoItem'

interface ProjetosProps {
  children: ReactNode
}

export function Projetos() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Ultimos projetos" />
      <section>
        <ProjetoItem title="Projeto 1" text="Em Construção" />
        <ProjetoItem title="Projeto 2" text="Em Construção" />
        <ProjetoItem title="Projeto 3" text="Em Construção" />
      </section>
      <button type="button">
        <Link href="/projetos">Ver Todos Os Projetos</Link>
      </button>
    </Container>
  )
}
