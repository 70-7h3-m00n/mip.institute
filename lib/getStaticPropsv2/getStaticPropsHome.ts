import routes from '@/config/routes';
import { THomev2PageData } from '@/types/index';
import qs from 'qs';

const queryString = qs.stringify(
  {
    populate: {
      heroCarousel: {
        populate: {
          img: {
            fields: ['url', 'width', 'height'],
          },
        },
      },
      publications: {
        populate: {
          slide: {
            populate: {
              files: {
                fields: ['url', 'width', 'height'],
              },
            },
          },
        },
      },
      blogs: {
        fields: ['title', 'date', 'slug'],
        populate: {
          picture: {
            fields: ['url'],
          },
        },
      },
      partners: {
        fields: ['title', 'subtitle'],
        populate: {
          image: {
            fields: ['url'],
          },
        },
      },
      reviews: {
        populate: '*',
      },
    },
  },
  {
    encodeValuesOnly: true,
    skipNulls: true,
  }
);

async function getStaticPropsHome() {
  try {
    const response = await fetch(`${routes.back.rootv2}/api/home?${queryString}`, {
      cache: 'force-cache', // Кэшировать данные для SSG
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_BEARER}`,
      },
    });

    // if (!response.ok) {
    //   throw new Error(`API error: ${response.status}`);
    // }

    const data = await response.json();
    return data.data as THomev2PageData;
  } catch (error) {
    console.error('Ошибка в getStaticPropsHome:', error);
    return { data: null } ; // Фоллбэк
  }
}

export default getStaticPropsHome;