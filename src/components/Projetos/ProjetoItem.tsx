import { ProjetoContainer } from './styles'
import Link from 'next/dist/client/link'
import { AiOutlineRightCircle } from 'react-icons/ai'

interface ProjetoProps {
  title: string
  text: string
}

export default function ProjetoItem({ title, text }: ProjetoProps) {
  return (
    <ProjetoContainer imgUrl="http://www.unirio.br/propg/diretoria-de-pos-graduacao%3B/jornadapg/imagens/em-construcao/image">
      <section>
        <div className="overlay"></div>
        <div className="text">
          <h1>{title}</h1>
          <h2>{text}</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/projeto">
          Ver mais <AiOutlineRightCircle />
        </Link>
      </button>
    </ProjetoContainer>
  )
}
