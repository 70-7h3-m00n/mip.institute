import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/components/sections/practicalTraining/PracticalWhatYouWillLearn/PracticalWhatYouWillLearnItem/PracticalWhatYouWillLearnItem.module.sass'
import { WhatYouWillLearnItem } from '@/types/page/practicalTraining/TypePagePracticalTrainingPropsQuery'
import classNames from 'classnames'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import ReactMarkdown from 'react-markdown'

type Props = {
  block?: WhatYouWillLearnItem
  number: number
}

const PracticalWhatYouWillLearnItem = React.memo(({ block, number }: Props) => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: `${isMobileAndTabletLayout ? '0px 0px -50% 0px' : '-20% 0px -50% 0px'}`,
    triggerOnce: false,
    delay: 200
  })

  const customRenderers = useMemo(
    () => ({
      strong: ({ children }: { children: React.ReactNode }) => (
        <span className={stls.strongText}>{children}</span>
      )
    }),
    []
  )

  const parsedText = useMemo(() => {
    if (!block) return null
    return block.text ? (
      <ReactMarkdown components={customRenderers}>{block.text}</ReactMarkdown>
    ) : null
  }, [block, customRenderers])

  return (
    <div
      ref={ref}
      className={classNames(stls.container, {
        [stls.visible]: inView,
        [stls.hidden]: !inView
      })}
      aria-live='polite'>
      <div className={stls.blockNumber}>
        <span className={stls.number}>0{number}</span>
      </div>
      <div className={stls.text}>{parsedText}</div>
    </div>
  )
})

PracticalWhatYouWillLearnItem.displayName = 'PracticalWhatYouWillLearnItem'
export default PracticalWhatYouWillLearnItem
