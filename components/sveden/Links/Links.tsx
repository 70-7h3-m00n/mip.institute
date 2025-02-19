import stls from './Links.module.sass'
import Link from 'next/link'
import links from 'constants/sveden/links'
import { useRouter } from 'next/router'
import classNames from 'classnames'

const Links = () => {
  const router = useRouter()
  const isActive = (href: string) => router.pathname === `/sveden/${href}`

  return (
    <nav className={stls.container}>
      <ul className={stls.list}>
        {links.map((el, idx) => (
          <li key={`${el.val}-${idx}`} className={stls.line}>
            <Link
              href={`/sveden/${el.href}`}
              //@ts-ignore
              aria-current={isActive ? 'page' : undefined}
              className={classNames(stls.link, {
                [stls.active]: isActive(el.href)
              })}>
              <span className={stls.text}>{el.val}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Links
