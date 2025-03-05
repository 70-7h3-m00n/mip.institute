import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { ContextStaticProps } from '@/context/index'
import { ReactNode, useContext } from 'react'
import classNames from 'classnames'

interface Props {
  href?: any
  aside?: boolean
  slug?: any
  children: ReactNode
  smallText?: boolean
  mainFields?: boolean
  orang?: boolean
  isViolet?: boolean
}
const BtnField = ({
  href = null,
  aside = false,
  slug = null,
  children,
  smallText = false,
  mainFields = false,
  orang = false,
  isViolet = false
}: Props) => {
  const { closeFieldsTooltip } = useContext(FieldsTooltipContext)
  const { curProgramsStudyFieldSlug } = useContext(ContextStaticProps)

  return (
    <Link
      href={href}
      className={classNames({
        [stls.mainFields]: mainFields,
        [stls.container]: true,
        [stls.tooltip]: !aside && !smallText,
        [stls.aside]: aside,
        [stls.active]:
          aside &&
          (slug === curProgramsStudyFieldSlug ||
            (!slug && !curProgramsStudyFieldSlug)),
        [stls.smallText]: smallText,
        [stls.orang]: orang,
        [stls.violet]: isViolet
      })}
      // @ts-ignore
      onClick={!aside && closeFieldsTooltip}>
      {children}
    </Link>
  )
}

export default BtnField
