import { NavLinkContainer } from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  title: string
  path: string
}

export default function NavLink({ title, path }: Props) {
  const router = useRouter()

  const isActive = router.pathname === path
  console.log(router.pathname)

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>{title}</Link>
    </NavLinkContainer>
  )
}
