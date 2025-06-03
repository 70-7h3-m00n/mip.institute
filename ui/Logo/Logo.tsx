import stls from './Logo.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { routes } from '@/config/index'
import IconLogo from '@/components/icons/IconLogo'
import Script from 'next/script'
import { logoJsonLd } from 'constants/header'

type Props = {
  atHeader?: boolean
  withTitle?: boolean
  atFooter?: boolean
}

const Logo = ({ atHeader = false, withTitle = true, atFooter = false }: Props) => {
  return (
    <div className={stls.container}>
      {atHeader && (
        <Script
          id='logo-jsonld'
          type='application/ld+json'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(logoJsonLd, null, 2)
          }}
        />
      )}
      <Link
        passHref
        href={routes.front.home}
        className={classNames({
          [stls.logo]: true,
          [stls.atHeader]: atHeader,
          [stls.atFooter]: atFooter
        })}>
        <IconLogo withTitle={withTitle} atFooter={atFooter} />
        {withTitle && (
          <p className={stls.title}>
            Московский <br />
            Институт <br />
            Психологии
          </p>
        )}
      </Link>
    </div>
  )
}

export default Logo
