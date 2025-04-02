import IconClever from '@/components/icons/IconClever'
import IconFlower from '@/components/icons/IconFlower'
import IconPortalViolet from '@/components/icons/IconPortalViolet'
import IconStar from '@/components/icons/IconStar'
import IconStarLong from '@/components/icons/IconStarLong'
import IconSun from '@/components/icons/IconSun'
import Wrapper from '@/ui/Wrapper'
import { ContextStaticProps } from '@/context/index'
import highlightFirstWord from '@/helpers/highlightFirstWord'
import stls from '@/styles/components/sections/WhatYouWillLearn.module.sass'
import Tag from '@/ui/Tag'
import classNames from 'classnames'
import content from 'constants/whatYouWillLearn'
import { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const WhatYouWillLearn = ({ onMain = false, title }) => {
  const { program } = useContext(ContextStaticProps)
  const markdownContent = program?.WhatYouWillLearn || ''

  const renderIcon = index => {
    switch (index) {
      case 0:
        return <IconSun />
      case 1:
        return <IconStarLong />
      case 2:
        return <IconFlower />
      case 3:
        return <IconClever />
      case 4:
        return <IconStarLong isOrangeFilled />
      default:
        return <IconStar isOrangeEmpty />
    }
  }
  const customRenderers = {
    ul: ({ children }) => <ul className={stls.list}>{children}</ul>,
    li: ({ children }) => (
      <li className={stls.item}>
        <IconPortalViolet />
        <div
          className={classNames({
            [stls.description]: true,
            [stls.main]: onMain
          })}>
          <span
            className={stls.firstWord}
            style={{
              display: onMain ? 'inline' : 'block'
            }}>
            {`${children.split(' ')[0]} `}
          </span>
          <span className={stls.p}>{highlightFirstWord(children)}</span>
        </div>
      </li>
    )
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.block}>
        {onMain && (
            <div className={stls.tag}>
              <Tag type='orange' isWhiteText>
                Знания
              </Tag>
            </div>
          )}
          <h2 className={stls.title}>{title}</h2>
          
          {onMain ? (
            <div className={stls.orangeBlock}>
              <ul className={stls.listMain}>
                {content.map((el, i) => (
                  <li className={stls.itemOnMain} key={`${title}-${i}`}>
                    <div className={stls.icon}>{renderIcon(i)}</div>
                    <div className={stls.listText}>
                      <div className={stls.listTitle}>{el.title}</div>
                      <div className={stls.text}>{el.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <ReactMarkdown
              components={customRenderers}
              rehypePlugins={[rehypeRaw]}>
              {markdownContent}
            </ReactMarkdown>
          )}
        </div>
      </Wrapper>
    </section>
  )
}

export default WhatYouWillLearn
