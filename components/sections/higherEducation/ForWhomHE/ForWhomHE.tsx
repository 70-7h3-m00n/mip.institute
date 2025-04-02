import stls from '@/components/sections/higherEducation/ForWhomHE/ForWhomHE.module.sass'
import Wrapper from '@/ui/Wrapper'
import CardForWhom from '@/components/sections/higherEducation/ForWhomHE/CardForWhom/CardForWhom'
import forWhomList from 'constants/higherEducation/forWhomHE'
import NoteBlock from '@/ui/NoteBlock'

export const ForWhomHE = () => {
  return (
    <section className={stls.section}>
      <Wrapper>
        <div className={stls.violetCloud}></div>
        <div className={stls.violetCloudMobile}></div>
        <h2 className={stls.title}>Для кого эта программа?</h2>
        <div className={stls.content}>
          {forWhomList.map(item => (
            <CardForWhom
              imageSrc={item.image}
              title={item.title}
              description={item.description}
              key={item.title}
              text={item.text}
            />
          ))}
        </div>
        <div className={stls.note}>
          <NoteBlock
            title={
              <>
                Сомневаешься <br className={stls.mobileOnly} /> в своих баллах?
              </>
            }
            description='Оцени свои шансы на поступление и узнай проходной балл!'
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default ForWhomHE
