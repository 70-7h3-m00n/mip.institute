import { company, routes, themeColor } from '@/config/index'
import preview from '@/config/preview'
import truncate from '@/helpers/general/truncate'
import { TypeLibProgram } from '@/types/index'
import { CourseJsonLd, NextSeo } from 'next-seo'
import { AdditionalRobotsProps } from 'next-seo/lib/types'
import { FC } from 'react'

type TSeoPagesProgram = {
  ofType: string
  program: TypeLibProgram
}

// Вынесли объект маппинга типов программ в маршруты
const PROGRAM_ROUTE_MAP = {
  Course: routes.front.courses,
  Profession: routes.front.professions,
  ShortTerm: routes.front.shortTerm
} as const

const SeoPagesProgram: FC<TSeoPagesProgram> = ({ ofType, program }) => {
  const seo = program?.seo

  const additionalMetaRobotsKeys = new Set([
    'nosnippet',
    'maxSnippet',
    'maxImagePreview',
    'maxVideoPreview',
    'noarchive',
    'unavailableAfter',
    'noimageindex',
    'notranslate'
  ])

  // Упрощённый парсинг metaRobots
  const parsedMetaRobots: AdditionalRobotsProps | null = seo?.metaRobots
    ? (seo.metaRobots
        .split(',')
        .map(item => {
          const [key, value] = item.trim().split(':')
          return additionalMetaRobotsKeys.has(key) ? { [key]: value || true } : null
        })
        .filter(Boolean) as AdditionalRobotsProps)
    : null

  const isNoindex = !seo?.isSEOFriendly || seo?.metaRobots?.includes('noindex')
  const isNofollow = !seo?.isSEOFriendly || seo?.metaRobots?.includes('nofollow')

  const seoParams = {
    title:
      seo?.metaTitle ||
      `${program?.title ? `${program.title} | ` : 'Программа | '}${program?.typeLabel || 'Курс'} | ${company.name}`,
    programTitle: program?.title || 'Программа',
    desc: seo?.metaDescription || truncate(program?.description || '', 120),
    canonical:
      seo?.canonicalURL ||
      `${routes.front.root}${PROGRAM_ROUTE_MAP[ofType] || routes.front.professions}/${program?.studyFieldSlug}/${program?.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview || isNofollow}
        noindex={preview || isNoindex}
        {...((parsedMetaRobots && { robotsProps: parsedMetaRobots }) || {})}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routes.front.root}${routes.front.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        provider={{
          name: company.name,
          url: seoParams.canonical
        }}
      />
    </>
  )
}

export default SeoPagesProgram
