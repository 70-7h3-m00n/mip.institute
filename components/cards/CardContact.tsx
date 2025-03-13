import stls from '@/styles/components/cards/CardContact.module.sass'
import classNames from 'classnames'
import loadIcon from '@/helpers/general/loadIcon'

type CardContactType = {
  city: string
  street: string
  numbers: { href: string; val: string }[]
  studyDivision?: {
    city: string
    href: string
    val: string
    contactType: string
    areaServed: string[]
    languages: string[]
  }
  email: { href: string; val: string }
}

const CardContact = ({ city, street, numbers, email, studyDivision }: CardContactType) => {
  return (
    <div className={stls.container}>
      <div className={stls.row}>
        <div className={stls.icon}>
          {loadIcon('IconLocation', { cbeta: true, responsive: true })}
        </div>
        <p className={stls.city}>{city}</p>
      </div>
      <div className={stls.row}>
        <p className={stls.street}>{street}</p>
      </div>
      {studyDivision && <p className={stls.number}>Приемная комиссия:</p>}
      <div className={classNames({ [stls.row]: true, [stls.numbers]: true })}>
        {numbers.map((number, idx) => (
          <p key={number.val} className={stls.number}>
            <a href={number.href} className={stls.link}>
              {number.val}
            </a>
            {idx + 1 < numbers.length && ','}
          </p>
        ))}
      </div>
      {studyDivision && (
        <>
          <p className={stls.number}>{studyDivision.contactType}:</p>
          <p className={stls.number}>
            <a href={studyDivision.href} className={stls.link}>
              {studyDivision.val}
            </a>
          </p>
        </>
      )}

      <div className={stls.row}>
        <p className={stls.email}>
          <a href={email.href} className={stls.link}>
            {email.val}
          </a>
        </p>
      </div>
    </div>
  )
}

export default CardContact
