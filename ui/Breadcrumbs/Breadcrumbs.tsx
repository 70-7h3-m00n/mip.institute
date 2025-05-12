import stls from './Breadcrumbs.module.sass'
import Link from 'next/link'
import classNames from 'classnames'
import { Fragment, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { breadcrumbsConfig, programsConfig } from '@/ui/Breadcrumbs/constants'

type Props = {
  lastLabel?: string
  isJournal?: boolean
  journalSlug?: string
}

const Breadcrumbs = ({ lastLabel, isJournal = false, journalSlug }: Props) => {
  const { asPath } = useRouter()

  const breadcrumbs = useMemo(() => {
    const segments = asPath.split('?')[0].split('/').filter(Boolean)
    const paths = segments.map((_, index) => `/${segments.slice(0, index + 1).join('/')}`)

    return paths
      .map(path => {
        const segment = path.split('/').pop()
        const label = breadcrumbsConfig[path] || programsConfig[`/${segment}`] || lastLabel
        return {
          path: path.replace(/\/+/g, '/'),
          label
        }
      })
      .filter(breadcrumb => breadcrumb.label)
  }, [lastLabel, asPath])

  const handleClick = useCallback(() => {
    if (typeof window !== 'undefined' && journalSlug) {
      localStorage.setItem('selectedFieldSlug', journalSlug)
    }
  }, [journalSlug])

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://mip.institute',
          name: 'Главная'
        }
      },
      ...breadcrumbs.map((breadcrumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        item: {
          '@id': `https://mip.institute${breadcrumb.path}`,
          name: breadcrumb.label
        }
      }))
    ]
  }

  return (
    <>
      <Script
        id='breadcrumb-jsonld'
        type='application/ld+json'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd, null, 2)
        }}
      />
      <nav
        aria-label='Breadcrumbs'
        className={classNames(stls.linkList, {
          [stls.isJournal]: isJournal
        })}>
        <Link href='/' className={stls.homeLink}>
          Главная
        </Link>

        {breadcrumbs.map((breadcrumb, index) => (
          <Fragment key={breadcrumb.path}>
            {index === breadcrumbs.length - 1 ? (
              <span
                className={classNames(stls.link, stls.disabled, {
                  [stls.isJournal]: isJournal
                })}
                aria-current='page'>
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                className={classNames(stls.link, {
                  [stls.isJournal]: isJournal
                })}
                href={breadcrumb.path}
                onClick={() => {
                  if (isJournal) {
                    handleClick()
                  }
                }}>
                {breadcrumb.label}
              </Link>
            )}
          </Fragment>
        ))}
      </nav>
    </>
  )
}

export default Breadcrumbs
