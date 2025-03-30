import { routes } from '@/config/index'
import Link from 'next/link'

const commonMainTableHeader = ['Наименование', 'Данные']

const commonMainTableRows = [
  {
    itemProp: 'fullName',
    cells: [
      {
        content: 'Полное наименование образовательной организации'
      },
      {
        content:
          'Научная автономная некоммерческая организация «Московский институт психологии»'
      }
    ]
  },
  {
    itemProp: 'shortName',
    cells: [
      {
        content: 'Сокращенное наименование образовательной организации'
      },
      { content: 'НАНО «МИП»' }
    ]
  },
  {
    itemProp: 'regDate',
    cells: [
      {
        content: 'Дата создания образовательной организации'
      },
      { content: '29.12.2020' }
    ]
  },
  {
    itemProp: 'address',
    cells: [
      {
        content: 'Адрес места нахождения образовательной организации'
      },
      {
        content: '107078, город Москва, Докучаев переулок, дом 8.'
      }
    ]
  },
  {
    itemProp: 'workTime',
    cells: [
      { content: 'Режим, график работы' },
      {
        content:
          'Понедельник - пятница с 10:00 до 19:00, суббота с 10:00 до 15:00'
      }
    ]
  },
  {
    itemProp: 'telephone',
    cells: [
      { content: 'Контактные телефоны' },
      { content: '+7 (499) 110-88-19' }
    ]
  },
  {
    itemProp: 'email',
    cells: [
      { content: 'Адреса электронной почты' },
      {
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>
      }
    ]
  },
  {
    itemProp: 'licenseDocLink',
    cells: [
      {
        content:
          'Информация о лицензии на осуществление образовательной деятельности'
      },
      {
        content: (
          <a
            href={`${routes.front.docsConstituent}/vypiska-licenzii-nano-mip-041363.pdf`}
            target='_blank'
            rel='noopener noreferrer'>
            № Л035-01298-77/00180046
          </a>
        )
      }
    ]
  },
  {
    itemProp: 'accreditationDocLink',
    cells: [
      {
        content:
          'Информация о наличии государственной аккредитации образовательной деятельности'
      },
      {
        content: 'Отсутствует'
      }
    ]
  }
]

const uchredHeader = [
  'Наименование учредителя',
  'Адрес местонахождения учредителя(ей)',
  'Контактные телефоны',
  'Адреса электронной почты',
  'Адрес сайта учредителя(ей) в сети «Интернет»'
]

const uchredRows = [
  {
    itemProp: 'uchredLaw',
    cells: [
      {
        itemProp: 'nameUchred',
        content:
          'Научная автономная некоммерческая организация «Московский институт психологии»'
      },
      {
        itemProp: 'addressUchred',
        content: '107078, город Москва, Докучаев переулок, дом 8.'
      },
      {
        itemProp: 'telUchred',
        content: '+7 (499) 110-88-19'
      },

      {
        itemProp: 'mailUchred',
        content: <a href='mailto:info@mip.institute'>info@mip.institute</a>
      },
      {
        itemProp: 'websiteUchred',
        content: (
          <Link
            href='https://mip.institute/'
            target='_blank'
            rel='noopener noreferrer'>
            https://mip.institute/
          </Link>
        )
      }
    ]
  }
]

const platformHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности '
]
const platformRows = [
  {
    itemProp: 'addressPlaceSet',
    cells: [
      {
        content: 1
      },
      { content: 'Не предусмотрено' }
    ]
  }
]

const practiceHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const practiceRows = [
  {
    itemProp: 'addressPlacePrac',
    cells: [
      {
        content: 1
      },
      { content: 'Проведение практики не осуществляется' }
    ]
  }
]

const podgHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const podgRows = [
  {
    itemProp: 'addressPlacePodg',
    cells: [
      {
        content: 1
      },
      { content: 'Практическая подготовка не осуществляется' }
    ]
  }
]

const giaHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const giaRows = [
  {
    itemProp: 'addressPlaceGia',
    cells: [
      {
        content: 1
      },
      {
        content:
          'Проведение государственной итоговой аттестации не осуществляется'
      }
    ]
  }
]

const dopHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const dopRows = [
  {
    itemProp: 'addressPlaceDop',
    cells: [
      {
        content: 1
      },
      {
        content: '107078, город Москва, Докучаев переулок, дом 8.'
      }
    ]
  }
]

const profHeader = [
  '№ п/п',
  'Адрес места осуществления образовательной деятельности'
]
const profRows = [
  {
    itemProp: 'addressPlaceOppo',
    cells: [
      {
        content: 1
      },
      {
        content: 'Профессиональное обучение не осуществляется'
      }
    ]
  }
]

export {
  commonMainTableHeader,
  commonMainTableRows,
  uchredHeader,
  uchredRows,
  platformHeader,
  platformRows,
  practiceHeader,
  practiceRows,
  podgHeader,
  podgRows,
  giaHeader,
  giaRows,
  dopHeader,
  dopRows,
  profHeader,
  profRows
}
