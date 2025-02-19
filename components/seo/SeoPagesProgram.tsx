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
  curProgramsStudyFieldSlug?: string
}

const SeoPagesProgram: FC<TSeoPagesProgram> = ({
  ofType,
  program,
  curProgramsStudyFieldSlug
}) => {
  const seo = program?.seo

  const additionalMetaRobotsKeys = [
    'nosnippet',
    'maxSnippet',
    'maxImagePreview',
    'maxVideoPreview',
    'noarchive',
    'unavailableAfter',
    'noimageindex',
    'notranslate'
  ]
  const parsedMetaRobots = ((
    seo?.metaRobots &&
    seo?.metaRobots.split(',').map(item => {
      const trimmedItem = item?.trim()

      if (additionalMetaRobotsKeys.some(key => trimmedItem?.includes(key))) {
        const [key, value] = trimmedItem?.split(':')

        return { [key]: value || true }
      }

      return null
    })
    //@ts-ignore
  )?.filter(item => item) || null) as AdditionalRobotsProps

  const isNoindex = !seo?.isSEOFriendly || seo?.metaRobots?.includes('noindex')

  const isNofollow =
    !seo?.isSEOFriendly || seo?.metaRobots?.includes('nofollow')

  const seoParams = {
    title:
      seo?.metaTitle ||
      `${program?.title ? program.title + ' | ' : 'Программа | '}${
        program?.typeLabel || 'Курс'
      } | ${company.name}`,
    programTitle: program?.title || 'Программа',
    desc:
      seo?.metaDescription ||
      (program?.description ? truncate(program?.description, 120) : ''),
    canonical:
      seo?.canonicalURL ||
      `${routes.front.root}${
        ofType === 'Course'
          ? routes.front.courses
          : ofType === 'Profession'
          ? routes.front.professions
          : ofType === 'ShortTerm'
          ? routes.front.shortTerm
          : routes.front.professions
      }/${program?.studyFieldSlug}/${program?.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        themeColor={themeColor}
        nofollow={preview ? true : isNofollow}
        noindex={preview ? true : isNoindex}
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
