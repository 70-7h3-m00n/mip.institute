import stls from '@/styles/components/sections/Contacts.module.sass'
import Wrapper from '@/ui/Wrapper'
import { company } from '@/config/index'
import CardContact from '@/components/cards/CardContact'

const Contacts = () => {
  const cards = [
    {
      city: company.addresses.default.city,
      street: `${company.addresses.default.street.name} ${company.addresses.default.street.type} ${company.addresses.default.street.door}`,
      numbers: [company.phoneNumbers.default, company.phoneNumbers.defaultAlt],
      studyDivision: company.phoneNumbers.studyDivision,
      email: company.emails.default
    },
    {
      city: company.addresses.kz.city,
      street: `${company.addresses.kz.street.type} ${company.addresses.kz.street.name} ${company.addresses.kz.street.door}`,
      numbers: [company.phoneNumbers.kz],
      email: company.emails.kz
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.cards}>
          {cards.map(({ city, street, numbers, email, studyDivision }) => (
            <div key={`${city} ${street}`} className={stls.card}>
              <CardContact
                city={city}
                street={street}
                numbers={numbers}
                studyDivision={studyDivision}
                email={email}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}

export default Contacts
