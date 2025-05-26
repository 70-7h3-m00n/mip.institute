import { THomev2PageData } from '@/types/page/homev2/HomePagev2Props';
import { ProgramsDataQueryResult } from '@/types/page/home/homeGeneralTypes';

interface THomeServerProps {
  data: THomev2PageData | { error: string; data: null };
  all: ProgramsDataQueryResult | { error: string; data: null };
}

export default async function HomeTest({ data, all }) {
  console.log(data.blogs[0].title);
  
  if (data?.error || !data) {
    return <div>Ошибка загрузки данных: {data?.error || 'Данные отсутствуют'}</div>;
  }
  if (all?.error || !all) {
    return <div>Ошибка загрузки программ: {all?.error || 'Программы отсутствуют'}</div>;
  }

  return (
    <div>
      <h1>Тестовая страница</h1>
      <p>Данные: {JSON.stringify(data.blogs[0].title|| 'Нет данных')}</p>
    </div>
  );
}