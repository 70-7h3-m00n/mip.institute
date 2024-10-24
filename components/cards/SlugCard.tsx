import stls from '@/styles/components/cards/SlugCard.module.sass'
import Link from 'next/link'
import routes from '@/config/routes'
import Image from 'next/image'
import base64pixel from '@/config/base64pixel'
import classNames from 'classnames'

type CardType = {
  item: {
    courseOpened?: boolean
    date: string
    id: string
    picture: {
      height: string
      width: string
      url: string
    }
    slug: string
    studyField: string
    studyFieldSlug: string
    subtitle: string
    title: string
  }
  slug: string
  firstCard?: boolean
  isLifeCourses?: boolean
}

const SlugCard = ({
  item,
  slug,
  firstCard = false,
  isLifeCourses = false
}: CardType) => {
  const dateOfCourse = new Date(item?.date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })

  return (
    <>
      <Link
        passHref
        href={`/${slug}/${item?.slug}`}
        className={classNames({
          [stls.seminarCard]: !firstCard,
          [stls.firstCard]: firstCard,
          [stls.isLifeCourses]: isLifeCourses
        })}>
        <div className={stls.seminarImg}>
          <Image
            src={item?.picture?.url}
            alt={'alt'}
            className={stls.img}
            width={760}
            height={430}
            placeholder='blur'
            blurDataURL={base64pixel}
          />
        </div>

        <div className={stls.seminarText}>
          <div className={stls.tags}>
            <p className={stls.seminarCardTag}>{item?.studyField}</p>
            {item?.courseOpened && (
              <p className={stls.seminarCardTag}>идет набор</p>
            )}
          </div>

          <p className={stls.articleTitle}>{item?.title}</p>
          {firstCard && (
            <p className={stls.articleSubtitle}>{item?.subtitle}</p>
          )}
          {/* проверка на то, опубликовано ли сегодня? */}
          <p className={stls.date}>
            {new Date().toLocaleString('ru-RU', {
              day: 'numeric',
              month: 'long'
            }) === dateOfCourse
              ? 'Добавлено сегодня'
              : dateOfCourse}
          </p>
        </div>
      </Link>
    </>
  )
}

export default SlugCard
