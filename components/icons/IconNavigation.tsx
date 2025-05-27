'use client'
import stls from '@/styles/components/icons/IconNavigation.module.sass'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import DOMPurify from 'dompurify'
import rehypeRaw from 'rehype-raw'

const IconNavigation = ({ children, hover }) => {
  const [sanitizedIcon, setSanitizedIcon] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cleanIcon = DOMPurify.sanitize(children || '', {
        USE_PROFILES: { svg: true }
      })
      setSanitizedIcon(cleanIcon)
    }
  }, [children])

  return (
    <span className={classNames(stls.container, { [stls.hover]: hover })}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{sanitizedIcon}</ReactMarkdown>{' '}
    </span>
  )
}

export default IconNavigation
