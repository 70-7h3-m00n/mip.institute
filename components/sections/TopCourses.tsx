import CardTopProgram from '@/components/cards/CardTopProgram'
import ImgTopCourse from '@/components/imgs/programs/ImgTopCourse'
import Wrapper from '@/ui/Wrapper'
import routes from '@/config/routes'
import { ContextStaticProps } from '@/context/index'
import stls from '@/styles/components/sections/TopCourses.module.sass'
import SwiperContainer from '@/ui/SwiperContainer'
import Tag from '@/ui/Tag'
import targetSlugs from 'constants/topCourses'
import { useContext } from 'react'

const TopCourses = () => {
  const { programs } = useContext(ContextStaticProps)

  if (!programs || !programs.length) {
    return null // Если нет данных, не рендерим ничего
  }
  
  const topCourses = targetSlugs.map(slug => programs.find(profession => profession.slug === slug))

  const list =
    programs &&
    [...topCourses]?.map(course => ({
      ...course,
      image: (
        <ImgTopCourse
          src={course?.heroPicture?.url}
          alt={course?.title}
          width={course?.heroPicture?.width}
          height={course?.heroPicture?.height}
        />
      )
    }))

  const topCoursesSlides =
    list[0]?.title &&
    list.map((course, idx) => (
      <CardTopProgram
        href={`${routes.front.professions}/${course.studyFieldSlug}/${course.slug}`}
        key={course.name + idx}
        portrait={course?.image}
        title={course.title}
        studyHours={course.studyHours}
      />
    ))
  const mobileSwiperOptions = {
    slidesNum: 2,
    spaceBetween: 10
  }

  const tabletSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 20
  }

  const laptopSwiperOptions = {
    slidesNum: 3,
    spaceBetween: 30
  }

  const desktopSwiperOptions = {
    slidesNum: 4,
    spaceBetween: 30
  }

  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.heading}>
          <div className={stls.tag}>
            <Tag type='orange'>ТОП</Tag>
          </div>
          <h2 className={stls.title}>Популярные курсы</h2>
        </div>
        <div className={stls.teachers}>
          <SwiperContainer
            autoHeight
            topCourses
            slides={topCoursesSlides}
            mobileOptions={mobileSwiperOptions}
            tabletOptions={tabletSwiperOptions}
            laptopOptions={laptopSwiperOptions}
            desktopOptions={desktopSwiperOptions}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default TopCourses
