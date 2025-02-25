import routes from '@/config/routes'
import Dzen from '../imgs/general/Dzen'

const BtnDzen = () => {
  return (
    <a href={routes.external.dzen} target='_blank' rel='noopener noreferrer' aria-label='Dzen'>
      <Dzen />
    </a>
  )
}

export default BtnDzen
