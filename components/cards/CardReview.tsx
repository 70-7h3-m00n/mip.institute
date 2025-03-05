import stls from '@/styles/components/cards/CardReview.module.sass'
import classNames from 'classnames'
import { ReactNode, useEffect, useState } from 'react'
import truncate from '@/helpers/general/truncate'

interface Props {
  isLiveCourse?: boolean
  title?: string
  photo?: ReactNode
  name?: string
  occupation?: string
  story?: string
}

const CardReview = ({
  title,
  photo,
  name,
  occupation,
  story,
  isLiveCourse
}: Props) => {
  const [cut, setCut] = useState(355)
  const [isFull, setIsFull] = useState(false)
  const [threePoints, setThreePoints] = useState(false)
  const fullStory = story?.length

  const cutHandler = () => {
    setThreePoints(false)
    // @ts-ignore
    setCut(fullStory)
    setIsFull(true)
  }

  const shortHandler = () => {
    setCut(370)
    setIsFull(false)
  }
  useEffect(() => {
    // @ts-ignore

    fullStory > cut && setThreePoints(true)
  }, [cut, fullStory, isFull])

  return (
    <div
      className={classNames({
        [stls.container]: true,
        [stls.liveCourse]: isLiveCourse
      })}>
      <div className={stls.upperContainer}>
        <div className={stls.img}>{photo}</div>
        <div className={stls.content}>
          <p className={stls.title} title={title}>
            {truncate(title, 65)}
          </p>
          <div className={stls.text}>
            <p className={stls.name}>{name}</p>
            <p className={stls.occupation}>{occupation}</p>
          </div>
        </div>
      </div>
      <div className={isFull ? `${stls.fullBottom}` : `${stls.bottom}`}>
        <p className={stls.story}>
          {story?.slice(0, cut)}
          {threePoints ? <span>...</span> : ''}
        </p>
        {story && story?.length > cut && (
          <p className={stls.moreText} onClick={cutHandler}>
            Читать полностью
          </p>
        )}
        {isFull && cut === story?.length && (
          <p onClick={shortHandler} className={stls.moreText}>
            Скрыть историю
          </p>
        )}
      </div>
    </div>
  )
}

export default CardReview
