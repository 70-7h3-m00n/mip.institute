const parseProgramContent = (content) => {
  const blockedWords = ['\n \n- Содержание 1\n- Содержание 2', 'Содержание 2', 'Содержание 1', '-']

  const cleanText = (text) => {
    let cleanedText = text;
    blockedWords.forEach(blockedWord => {
      cleanedText = cleanedText.replace(new RegExp(blockedWord, 'g'), '').trim(); // Удаляем блокированные слова
    });
    cleanedText = cleanedText.replace(/- -/g, '').trim(); // Удаляем двойное тире
    cleanedText = cleanedText.replace(/\s+/g, ' ').trim(); // Убираем лишние пробелы
    return cleanedText;
  };

  // Корректная обработка контента
  const paragraphs = content?.split(/\n\s*\n/).filter(Boolean); // Разделяем блоки по двойным переводам строк, включая лишние пробелы

  const titles = [];
  const topics = [];

  paragraphs?.forEach(paragraph => {
    if (paragraph.startsWith('-')) {
      const cleanedTopics = paragraph
        .split('\n')
        .filter(line => line.startsWith('-')) // Убедимся, что это элемент списка
        .map(line => line.replace(/^\s*-\s*/, '').trim()) // Убираем дефис и пробелы
        .filter(topic => topic.length > 0); // Фильтруем пустые строки
        //@ts-ignore
      topics.push(cleanedTopics);
    } else {
      const cleanedTitle = cleanText(paragraph); // Чистим заголовки от лишних слов и пробелов
      if (cleanedTitle.length > 0) { // Убедимся, что заголовок не пуст
        //@ts-ignore
        titles.push(cleanedTitle);
      }
    }
  });

  return { titles, topics };
};

export default parseProgramContent

