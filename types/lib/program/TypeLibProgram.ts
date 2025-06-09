import { TypeLibGeneralPicture, TypeLibTeachers, TypeLibReviews } from '@/types/index'

type TypeLibProgram = {
  isOpened: boolean
  isPopular: boolean
  id: string | null
  title?: string | null
  slug?: string | null
  studyField?: string | null
  studyFieldSlug: string | null
  type?: string | null
  typeLabel?: string | null
  studyMounthsDuration?: string | null
  heroPicture?: TypeLibGeneralPicture | null
  diploma1?: TypeLibGeneralPicture | null
  diploma2?: TypeLibGeneralPicture | null
  studyForm?: string | null
  description?: string | null
  studyFormLabel?: string | null
  studyHours?: string | null
  WhatYouWillLearn?: string | null
  ForWhom?: string | null
  forWhomSubtitle?: string | null
  programOverview?: string | null
  programOverviewTitle?: string | null
  fullTitle?: string | null
  shortContents?: string | null
  resumeTitle?: string | null
  entrySalary?: string | null
  resumeSkills?: string | null
  jobTitles?: string | null
  qualification?: string | null
  typeFullLabel?: string | null
  price?: string | null
  discount?: string | null
  questions?: string | null
  admissionDate?: string | null
  portfolio?: {
    name: string | null
    profession: string | null
    specialization: string | null
    salary: string | null
    qualification: string | null
    resumeSkills: string | null
    picture?: {
      url: string | null
      width: string | null
      height: string | null
    } | null
  } | null
  bonuses?: {
    title: string
    subtitle: string
    tags: string
    items: string
    image?: {
      url: string | null
      width: string | null
      height: string | null
    } | null
  } | null
  tariffs?:
    | {
        title: string
        practiceHours: string
        monthlyPrice: string
        yearlyPrice: string
        slug: string
        features?:
          | {
              text: string | null
            }[]
          | null
      }[]
    | null
  requests?: {
    title: string | null
    description: string | null
  } | null
  qnas?:
    | {
        question?: string | null
        answer?: string | null
      }[]
    | null
  teachers?: TypeLibTeachers | null
  index_number?: {
    idx?: number | null
  } | null
  seo?: {
    metaTitle?: string | null
    metaDescription?: string | null
    metaImage?: {
      url: string | null
      width: string | null
      height: string | null
      alternativeText?: string | null
    } | null
    unique_reviews?: TypeLibReviews | null
    keywords?: string | null
    metaRobots?: string | null
    structuredData?: {} | null //TODO: figure out structured data
    metaViewport?: string | null
    canonicalURL?: string | null
    isSEOFriendly?: boolean | null
    metaSocial?: {
      title?: string | null
      description?: string | null
      image: {
        url: string | null
        width: string | null
        height: string | null
        alternativeText?: string | null
      }
      socialNetwork?: string | null
    } | null
  } | null
} | null

export default TypeLibProgram
