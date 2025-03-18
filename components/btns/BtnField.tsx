import stls from '@/styles/components/btns/BtnField.module.sass'
import Link from 'next/link'
import FieldsTooltipContext from '@/context/fieldsTooltip/fieldsTooltipContext'
import { ContextStaticProps } from '@/context/index'
import { ReactNode, useContext } from 'react'
import classNames from 'classnames'

interface Props {
  href?: string
  aside?: boolean
  slug?: string
  children: ReactNode
  smallText?: boolean
  mainFields?: boolean
  orang?: boolean
  isViolet?: boolean
}
const BtnField = ({
  href = '#',
  aside = false,
  slug = '',
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
          aside && (slug === curProgramsStudyFieldSlug || (!slug && !curProgramsStudyFieldSlug)),
        [stls.smallText]: smallText,
        [stls.orang]: orang,
        [stls.violet]: isViolet
      })}
      onClick={!aside ? () => closeFieldsTooltip() : undefined}>
      {children}
    </Link>
  )
}

export default BtnField
