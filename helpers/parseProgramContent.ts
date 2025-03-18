const parseProgramContent = (content: string): { titles: string[]; topics: string[][] } => {
  const blockedWords: string[] = [
    '\n \n- Содержание 1\n- Содержание 2',
    'Содержание 2',
    'Содержание 1',
    '-'
  ]

  const cleanText = (text: string): string => {
    let cleanedText: string = text
    blockedWords.forEach(blockedWord => {
      cleanedText = cleanedText.replace(new RegExp(blockedWord, 'g'), '').trim()
    })
    cleanedText = cleanedText.replace(/- -/g, '').trim() // Удаляем двойное тире
    cleanedText = cleanedText.replace(/\s+/g, ' ').trim() // Убираем лишние пробелы
    return cleanedText
  }

  // Разбиваем контент на блоки, удаляя лишние пустые строки
  const paragraphs: string[] = content?.split(/\n\s*\n/).filter(Boolean) || []

  const titles: string[] = []
  const topics: string[][] = []

  paragraphs.forEach((paragraph: string) => {
    if (paragraph.startsWith('-')) {
      const cleanedTopics: string[] = paragraph
        .split('\n')
        .filter(line => line.startsWith('-')) // Фильтруем строки, начинающиеся с дефиса
        .map(line => line.replace(/^\s*-\s*/, '').trim()) // Убираем дефис и пробелы
        .filter(topic => topic.length > 0) // Фильтруем пустые строки

      if (cleanedTopics.length > 0) {
        topics.push(cleanedTopics)
      }
    } else {
      const cleanedTitle: string = cleanText(paragraph) // Чистим заголовки от лишних слов и пробелов
      if (cleanedTitle.length > 0) {
        titles.push(cleanedTitle)
      }
    }
  })

  return { titles, topics }
}

export default parseProgramContent
