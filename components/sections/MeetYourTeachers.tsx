import PopupTrigger from '@/ui/PopupTrigger'
import ImgTeacher from '@/components/imgs/teachers/ImgTeacher'
import Wrapper from '@/ui/Wrapper'
import stls from '@/styles/components/sections/MeetYourTeachers.module.sass'
import ReactMarkdown from 'react-markdown'

const MeetYourTeachers = ({ teachers }) => {
  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => <div className={stls.bio}>{children}</div>
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Познакомьтесь с вашими преподавателями</h2>
        <ul className={stls.teachers}>
          {teachers &&
            teachers.map(teacher => (
              <li key={teacher.name} className={stls.teacher}>
                <div className={stls.img}>
                  <ImgTeacher
                    src={teacher?.portrait?.url}
                    alt={teacher?.name}
                    width={270}
                    height={300}
                  />
                </div>
                <div>
                  <div className={stls.name}>{teacher.name}</div>
                  <ReactMarkdown components={customRenderers}>{teacher.achievements}</ReactMarkdown>
                </div>
              </li>
            ))}
        </ul>
        <div className={stls.btn}>
          <PopupTrigger btn='alpha' cta='getFullList' />
        </div>
      </Wrapper>
    </section>
  )
}

export default MeetYourTeachers
