const getNextDiscountDate = currentDate => {
  const date = new Date(currentDate)
  const dayOfWeek = date.getDay() // Текущий день недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)
  const today = date.getDate()

  // Определяем, до какого дня идет скидка (вторник = 2, пятница = 5)
  let targetDay
  let daysUntilTarget

  // Если сегодня до вторника (например, понедельник), то скидка до вторника
  // Если сегодня после вторника, но до пятницы (например, среда), то скидка до пятницы
  // Если сегодня после пятницы (например, суббота), то скидка до вторника следующей недели
  if (dayOfWeek <= 2) {
    // До вторника
    targetDay = 2
    daysUntilTarget = (2 - dayOfWeek + 7) % 7
  } else if (dayOfWeek <= 5) {
    // До пятницы
    targetDay = 5
    daysUntilTarget = (5 - dayOfWeek + 7) % 7
  } else {
    // После пятницы — до вторника следующей недели
    targetDay = 2
    daysUntilTarget = (2 - dayOfWeek + 7) % 7
  }

  // Если сегодня вторник или пятница, скидка действует до конца дня
  if (daysUntilTarget === 0) {
    date.setDate(today)
  } else {
    date.setDate(today + daysUntilTarget)
  }

  // Форматируем дату в нужный формат (например, "15 октября")
  return date.toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long'
  })
}

export default getNextDiscountDate
