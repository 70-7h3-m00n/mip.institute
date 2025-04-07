function getSeoTitle(ofType, curProgramsStudyFieldSlug) {
  switch (`${ofType}/${curProgramsStudyFieldSlug}`) {

    //detskaya-psihologiya
    case 'courses/detskaya-psihologiya':
      return `Детская психология: онлайн-курсы повышения квалификации от МИП`;
    case 'professions/detskaya-psihologiya':
      return 'Детская психология: профессиональная переподготовка онлайн'
    case 'programs/detskaya-psihologiya':
      return 'Курсы по детской психологии онлайн | МИП'
    
    //konsultirovanie

    case 'courses/konsultirovanie':
      return `Психологическое консультирование: онлайн-курсы повышения квалификации`;
    case 'professions/konsultirovanie':
      return 'Психологическое консультирование: профессиональная переподготовка онлайн'
    case 'programs/konsultirovanie':
      return 'Курсы психологического консультирования онлайн | МИП'

      //obshaya-psihologiya

    case 'courses/obshaya-psihologiya':
      return `Общая психология: дистанционные курсы повышения квалификации`;
    case 'professions/obshaya-psihologiya':
      return 'Общая психология: профессиональная переподготовка онлайн'
    case 'programs/obshaya-psihologiya':
      return 'Курсы по общей психологии онлайн | МИП'

    //organizacionnaya-psihologiya

    case 'courses/organizacionnaya-psihologiya':
      return `Организационная психология: онлайн-курсы повышения квалификации`;
    case 'professions/organizacionnaya-psihologiya':
      return 'Организационная психология: профессиональная переподготовка онлайн'
    case 'programs/organizacionnaya-psihologiya':
      return 'Курсы по организационной психологии онлайн | МИП'

    case 'courses/psihoterapiya':
      return `Психотерапия: онлайн-курсы повышения квалификации`;
    case 'professions/psihoterapiya':
      return 'Психотерапия: профессиональная переподготовка онлайн'
    case 'programs/psihoterapiya':
      return 'Курсы обучения психотерапии онлайн | МИП'

    case 'professions/dietologiya-i-nutriciologiya':
      return 'Диетология и нутрициология: профпереподготовка онлайн'
    case 'programs/dietologiya-i-nutriciologiya':
      return 'Диетология и нутрициология | Все направления | Московский Институт Психологии'

    case 'professions/klinicheskaya-psihologiya':
      return 'Клиническая психология: профессиональная переподготовка онлайн'
    case 'programs/klinicheskaya-psihologiya':
      return 'Клиническая психология | Все направления | Московский Институт Психологии'

    default:
      return (
        ofType === 'courses'
          ? 'Курсы повышения квалификации для психологов онлайн | МИП'
          : ofType === 'professions'
          ? 'Профессиональная переподготовка для психологов онлайн | МИП'
          : ofType === 'shortTerm' 
          ? 'Мини-курсы по психологии онлайн | Московский Институт Психологии (МИП)'
          : 'Курсы по психологии онлайн | Московский Институт Психологии'
      );
  }
}

export default getSeoTitle