import stls from '@/styles/components/program/ProgramLabel.module.sass'
import { ContextStaticProps } from '@/context/index'
import { useContext } from 'react'

const ProgramLabel = () => {
  const { program } = useContext(ContextStaticProps)

  return (
    <div className={stls.labels}>
      <p className={stls.labelType}>{program?.typeLabel}</p>
      {program?.type === 'Profession' && (
        <p className={stls.labelAdmission}>Идёт приём документов</p>
      )}
    </div>
  )
}

export default ProgramLabel
