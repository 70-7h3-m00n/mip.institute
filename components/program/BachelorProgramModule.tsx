import stls from '@/styles/components/program/BachelorProgramModule.module.sass'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import IconMinus from '@/components/icons/IconMinus'
import IconPlus from '@/components/icons/IconPlus'
import ReactMarkdown from 'react-markdown'

type Props = {
  title: string
  topics: string[]
  isOpened?: boolean
}

const BachelorProgramModule = ({ title, topics, isOpened }: Props) => {
  const [isOpen, setOpen] = useState(false)
  const blockedWords = ['Описание 1', 'Содержание 1', undefined, '']
  const hasNoDescriptionTopic = topics?.some(topic =>
    blockedWords.includes(topic)
  )
  const canBeOpened = !hasNoDescriptionTopic && topics?.length > 0

  useEffect(() => {
    isOpened && setOpen(true)
  }, [isOpened])

  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => (
      <p className={stls.p}>{children}</p>
    )
  }

  return (
    <li
      className={classNames({ [stls.container]: true, [stls.isOpen]: isOpen })}>
      <div className={stls.title} onClick={() => setOpen(!isOpen)}>
        <div className={stls.icon}>
          {canBeOpened ? isOpen ? <IconMinus /> : <IconPlus /> : <IconPlus />}
        </div>

        <p className={classNames({ [stls.pTitle]: true })}>{title}</p>
      </div>
      <div className={stls.topic}>
        {canBeOpened && (
          <>
            <ul className={stls.list}>
              {topics &&
                topics.map((topic, idx) => (
                  <li key={topic + idx} className={stls.item}>
                    <ReactMarkdown components={customRenderers}>
                      {topic}
                    </ReactMarkdown>
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </li>
  )
}

export default BachelorProgramModule
