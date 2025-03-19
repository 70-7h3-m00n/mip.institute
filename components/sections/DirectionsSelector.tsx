import routes from '@/config/routes'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import stls from '@/styles/components/sections/DirectionsSelector.module.sass'
import classNames from 'classnames'
import { Dispatch, FC, Fragment, SetStateAction, useState } from 'react'
import ProgramList from './ChooseProgram/ProgramList'

type Props = {
  currentType: string
  setCurrentType: Dispatch<SetStateAction<string | null>>
}
const DirectionsSelector: FC<Props> = ({ currentType = null, setCurrentType }) => {
  const list = [
    {
      id: 1,
      label: 'Профессиональная переподготовка',
      href: routes.front.professions,
      programType: 'profession'
    },
    {
      id: 2,
      label: 'Повышение квалификации',
      href: routes.front.courses,
      programType: 'course'
    }
  ]

  const isMobileLayout = useBetterMediaQuery('(max-width: 768px)')

  // Состояние для активного элемента
  const [activeItem, setActiveItem] = useState<number | null>(1)

  return (
    <div className={stls.container}>
      {list.map(({ id, label, href, programType }, idx) => (
        <Fragment key={id}>
          <div
            className={classNames({
              [stls.studyField]: true,
              [stls.active]: currentType === programType
            })}
            onMouseEnter={!isMobileLayout ? () => setCurrentType(programType) : undefined}
            onClick={() => {
              if (activeItem === id) {
                // Если элемент уже активен, снимаем активность
                setActiveItem(null)
                setCurrentType(null)
              } else {
                // Иначе, активируем элемент
                setActiveItem(id)
                setCurrentType(programType)
              }
            }}>
            <p className={stls.mainFields}>{label}</p>
          </div>
          {/* Показываем надпись под активным элементом */}
          {activeItem === id && (
            <div className={stls.mobileAccordeon}>
              <ProgramList
                currentType={currentType}
                ofType={
                  currentType === 'course'
                    ? 'course'
                    : currentType === 'profession'
                      ? 'profession'
                      : null
                }
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default DirectionsSelector
