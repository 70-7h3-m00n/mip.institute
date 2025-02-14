import { dev, preview, prod } from '@/config/index'

type TRoutes = {
  front: {
    [key: string]: string
  }
  back: {
    [key: string]: string
  }
  external: {
    [key: string]: `https://${string}` | `http://${string}`
  }
  anchors: {
    [key: string]: `#${string}`
  }
  share: {
    vk: (url: string, text: string) => string
    whatsapp: (url: string, text: string) => string
    telegram: (url: string, text: string) => string
  }
}

const routes: TRoutes = {
  front: {
    root: dev ? 'http://localhost:3000' : 'https://mip.institute',
    home: '/',
    programs: '/programs',
    professions: '/professions',
    shortTerm: '/shortTerm',
    journals: '/journal',
    journal: '/journal/slug',
    seminars: '/seminars',
    seminar: '/seminars/studyField/slug',
    liveCourses: '/live-courses',
    liveCourse: '/live-courses/slug',
    bachelors: '/bachelor',
    bachelor: '/bachelor/slug',
    practicalTrainings: '/practical-training',
    supervision: '/practical-training/supervision',
    practicalTraining: '/practical-training/slug',
    lectoriums: '/lectorium',
    lectorium: '/lectorium/slug',
    courses: '/courses',
    program: '/programs/studyField/slug',
    webinars: '/webinars',
    rating: '/rating',
    teachers: '/teachers',
    about: '/about',
    reviews: '/reviews',
    legal: '/legal',
    vacancies: '/vacancies',
    svedenCommon: '/sveden/common',
    legal_edu: '/legal_edu',
    payment: '/payment_edu_mip',
    gratefull: '/gratefull',
    contact: '/contact',
    docs: '/docs',
    ochuvomipConstituent: '/docs/ochu-vo-mip/constituent',
    ochuvomipGeneral: '/docs/ochu-vo-mip/general',
    docsConstituent: '/docs/constituent',
    docsRegulations: 'docs/regulations',
    docsGeneral: '/docs/general',
    assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
    policiesPrivacy: '/policies/privacy.pdf',
    policiesTerms: '/policies/terms.pdf',
    policiesOferta: '/policies/oferta-mip.pdf',
    policiesOfertaEvent: '/policies/oferta-event.pdf',
    regulation: '/policies/regulation.pdf',
    yandexAnalytics: '/policies/yandexAnalytics.pdf',
    lectoriumRoutes: '/docs/general/lectoriumRoutes'
  },
  back: {
    root: dev ? 'http://localhost:1337' :preview ? 'https://dev.api.mip.institute' : 'https://api.mip.institute',
    rootv2: prod
      ? 'https://api-v2.mip.institute'
      : preview
        ? 'https://dev.api-v2.mip.institute'
        : 'http://localhost:1338',
    home: '/',
    graphql: '/graphql',
    programs: '/programs',
    teachers: '/teachers',
    reviews: '/reviews',
    webinars: '/webinars',
    getStaticProps: '/get-static-props',
    getStaticPathsStudyFields: '/get-static-paths/study-fields',
    getStaticPathsPrograms: '/get-static-paths/programs',
    users: '/users'
  },
  external: {
    ochuVoMipLicense:
      'https://islod.obrnadzor.gov.ru/rlic/details/0B110B0A-0D0D-100D-0E0E-0F0D131211111110120D/',
    license: 'https://islod.obrnadzor.gov.ru/rlic/details/67f7635c-5dbb-e9d7-c30c-950b7e64c838/',
    vk: 'https://m.vk.com/mip_institute',
    whatsapp: 'http://wa.me/+74991108819',
    telegram: 'https://t.me/mip_institute',
    youtube: 'https://www.youtube.com/channel/UCGW-oYT-mquOPy6OY7R6iRA',
    ok: 'https://ok.ru/group/70000001109496',
    turtop:
      'https://tutortop.ru/school-reviews/moskovskij-institut-psihologii/?cid=1685112262621940498',
    otzovic: 'https://otzovik.com/reviews/nano_moskovskiy_institut_psihologii_russia_moscow',
    yandex: 'https://yandex.ru/profile/-/CDfB5OYg',
    twoGis: 'https://go.2gis.com/y85xl6',
    ucheba: 'https://www.ucheba.ru/uz/107383/opinions#new-comments-panel',
    dzen: 'https://dzen.ru/institute_mip',
    eddu: 'https://eddu.pro/reviews/mip-review',
    advCake: 'https://advcake.ru/lp/mipinstitute/',
    referralProgram: 'https://mip-institute-referral.ru/'
  },
  anchors: {
    // Define anchors here if needed
  },
  share: {
    vk: (url: string, text: string) =>
      `https://vk.com/share.php?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`,
    whatsapp: (url: string, text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`,
    telegram: (url: string, text: string) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
  }
}

export default routes
