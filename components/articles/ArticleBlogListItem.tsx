import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import DOMPurify from 'dompurify'
import stls from '@/styles/components/articles/ArticleBlogList.module.sass'

type ArticleBlogListItemType = {
  icon: string
  text: string
}

const ArticleBlogListItem = ({ icon, text }: ArticleBlogListItemType) => {
  // const { icon } = props
  // const [sanitizedIcon, setSanitizedIcon] = useState('')

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const cleanIcon = DOMPurify.sanitize(icon || '', {
  //       USE_PROFILES: { svg: true }
  //     })
  //     setSanitizedIcon(cleanIcon)
  //   }
  // }, [icon])

  // const customRenderers = {
  //   code: ({ children }: { children: React.ReactNode }) => (
  //     <span className={stls.icon}>{children}</span>
  //   ),
  //   p: ({ children }: { children: React.ReactNode }) => (
  //     <p className={stls.papap}>{children}</p>
  //   )
  // }


  return (
    <div className={stls.innerBox}>
      {/* <div className={stls.icon}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={customRenderers}>
          {sanitizedIcon}
        </ReactMarkdown>
      </div>
      <ReactMarkdown components={customRenderers}>{text || ''}</ReactMarkdown> */}
      <div className={stls.icon}>
      {/* {props.icon.map((el, i) => ( */}
      <>
        <span 
        dangerouslySetInnerHTML={{ __html: icon }}
        aria-hidden="true"
      />
    </>
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ArticleBlogListItem
