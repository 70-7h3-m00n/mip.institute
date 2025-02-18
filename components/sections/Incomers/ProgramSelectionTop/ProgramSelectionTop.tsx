import Wrapper from '@/ui/Wrapper'
import stls from './ProgramSelectionTop.module.sass'
import IconCheck from '@/components/icons/IconCheck'
import Image from 'next/image'
import ArrowButton from '@/components/sections/Incomers/ArrowButton/ArrowButton'
import { incomersStudyOptions } from 'constants/customSelect'
import CustomSelect from '@/ui/CustomSelect'
import { useState } from 'react'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import { DataItem, ListBlock } from '@/types/page/incomers/incomersTypes'

interface MappedCard {
  link: string
  title: string
  points: string[]
  image: string
}

interface PurpleCard {
  id: number
  title: string
  text: string
}

interface Props {
  bottomCards: DataItem[]
  topCards: DataItem[]
}

const ProgramSelectionTop = ({ bottomCards, topCards }: Props) => {
  const [type, setType] = useState(incomersStudyOptions[0]?.value)
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const purples: PurpleCard[] = topCards.map(({ id, text }) => {
    const title =
      text.find(block => block.type === 'paragraph' && 'children' in block)?.children[0]?.text || ''

    const textContent = text
      .filter(block => block.type === 'paragraph' && 'children' in block)
      .slice(1)
      .map(block => block.children[0]?.text.replace(/ /g, '\n'))
      .join('\n\n')

    return { id, title, text: textContent }
  })

  const mappedCards: MappedCard[] = bottomCards?.map(({ text, img }) => {
    const title = text
      .find(block => block.type === 'paragraph' && 'children' in block)
      ?.children[0]?.text.replace(' ', '\n')

    const cleanedTitle = title.replace(/{|}/g, '').trim()

    let link: string
    if (cleanedTitle.toLowerCase().includes('переподготовка')) {
      link = 'professions'
    } else if (cleanedTitle.toLowerCase().includes('бакалавриат')) {
      link = 'bachelor'
    } else if (cleanedTitle.toLowerCase().includes('подготовка')) {
      link = 'practical-training'
    } else if (cleanedTitle.toLowerCase().includes('повышение')) {
      link = 'courses'
    }

    const points =
      text
        .find((block): block is ListBlock => block.type === 'list' && 'children' in block)
        ?.children.map(item => item.children[0]?.text) || []

    return { link, title, points, image: img.url }
  })

  const filteredCards = isMobileAndTabletLayout
    ? mappedCards.filter(card => card.link === type)
    : mappedCards

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>
          <span className={stls.coloured}>Широкий выбор </span>
          программ обучения
        </h2>
        <div className={stls.purples}>
          {purples.map((item, index) => (
            <div key={index} className={stls.purpleCard}>
              <span className={stls.purpleCardTitle}>{item.title}</span>
              <span className={stls.purpleCardText}>{item.text}</span>
            </div>
          ))}
        </div>
        {isMobileAndTabletLayout && (
          <CustomSelect
            onChange={selected => setType(selected.value)}
            options={incomersStudyOptions}
            radius='50'
            height='55'
            mainColor='#FF8F52'
            bgColor='#FF8F52'
            textColor='white'
            placeholder='Выбрать уровень образования'
            menuBorderColor='#FF8F52'
            value={incomersStudyOptions.find(option => option.value === type)}
          />
        )}
        <div className={stls.cards}>
          {filteredCards?.map((item, index) => (
            <div key={index} className={stls.greyCard}>
              <div className={stls.btnContainer}>
                <ArrowButton href={item.link} />
              </div>
              <div>
                <span className={stls.greyCardTitle}>{item.title}</span>
                <ul className={stls.list}>
                  {item.points.map((item, index) => (
                    <li key={index} className={stls.point}>
                      <span>
                        <IconCheck noBackground />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={stls.imageDiv}>
                <Image
                  src={item.image}
                  alt='Фото'
                  width={230}
                  height={150}
                  style={{ height: '100%', width: '100%' }}
                  className={stls.image}
                />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default ProgramSelectionTop
