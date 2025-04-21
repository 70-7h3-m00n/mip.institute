import ImgTeacher from '@/components/imgs/teachers/ImgTeacher'
import Wrapper from '@/ui/Wrapper'
import { getImageHeight } from '@/helpers/index'
import stls from '@/styles/components/sections/TeachersLineUp/TeachersLineUp.module.sass'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const TeachersFiles = ({ teachers }) => {
  const [value, setValue] = useState(4)

  const increaseHandler = () => {
    setValue(prev => prev + 4)
  }

  const customRenderers = {
    p: ({ children }: { children: React.ReactNode }) => <div className={stls.bio}>{children}</div>
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Познакомьтесь с вашими наставниками</h2>
        <ul className={stls.teachers}>
          {teachers &&
            teachers.slice(0, value).map(teacher => (
              <li key={teacher.name} className={stls.teacher}>
                <div className={stls.img}>
                  <ImgTeacher
                    src={teacher?.portrait?.url}
                    alt={teacher?.name}
                    width={270}
                    height={getImageHeight({
                      width: 270,
                      widthInitial: teacher?.portrait?.width,
                      heightInitial: teacher?.portrait?.height
                    })}
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
          <button onClick={increaseHandler}>Показать еще</button>
        </div>
      </Wrapper>
    </section>
  )
}

export default TeachersFiles
