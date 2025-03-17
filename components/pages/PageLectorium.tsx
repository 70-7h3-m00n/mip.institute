import Advantages from '@/components/sections/lectorium/Advantages/Advantages'
import DownloadProgram from '@/components/sections/lectorium/DownloadProgram/DownloadProgram'
import EventRegistration from '@/components/sections/lectorium/EventRegistration/EventRegistration'
import HaveQuestions from '@/components/sections/lectorium/HaveQuestions/HaveQuestions'
import LectoriumCertificate from '@/components/sections/lectorium/LectoriumCertificate/LectoriumCertificate'
import LectoriumFAQ from '@/components/sections/lectorium/LectoriumFAQ/LectoriumFAQ'
import LectoriumHero from '@/components/sections/lectorium/LectoriumHero/LectoriumHero'
import LectoriumHowGoesClasses from '@/components/sections/lectorium/LectoriumHowGoesClasses/LectoriumHowGoesClasses'
import LectoriumWhatYouWillLearn from '@/components/sections/lectorium/LectoriumWhatYouWillLearn/LectoriumWhatYouWillLearn'
import Maps from '@/components/sections/lectorium/Maps/Maps'
import ReviewsWithStars from '@/components/sections/lectorium/ReviewWithStars/ReviewsWithStars'
import VideoReviews from '@/components/sections/lectorium/VideoReviews/VideoReviews'
import stls from '@/styles/pages/PageLectorium.module.sass'
import { Lectorium } from '@/types/page/lectorium/TypePageLectoriumPropsQuery'
import LectoriumWhoIsEventFor from '../sections/lectorium/LectoriumWhoIsEventFor/LectoriumWhoIsEventFor'
import Speaker from '../sections/lectorium/Speaker/Speaker'
import NextEvents from '../sections/lectorium/NextEvents/NextEvents'

type Props = {
  lectorium: Lectorium
}

const PageLectorium = ({ lectorium }: Props) => {
  return (
    <div className={stls.container}>
      {lectorium && (
        <>
          <LectoriumHero lectorium={lectorium} />
          {lectorium.type !== 'studentsOnly' && (
            <EventRegistration
              timepadHref={lectorium?.timepadHref}
              targetDate={lectorium?.targetDate}
            />
          )}

          {lectorium?.speaker && <Speaker speaker={lectorium?.speaker} />}
          <Advantages />
          <LectoriumWhoIsEventFor />
          {lectorium?.whatYouWillLearn && (
            <LectoriumWhatYouWillLearn whatYouWillLearn={lectorium.whatYouWillLearn} />
          )}
          {lectorium?.pdf && <DownloadProgram lectorium={lectorium} />}
          {lectorium?.diploma && (
            <LectoriumCertificate href={lectorium.timepadHref} diploma={lectorium?.diploma} />
          )}
          <LectoriumHowGoesClasses />
          <HaveQuestions />
          <VideoReviews />
          <ReviewsWithStars reviews={lectorium?.reviewWithDate} />
          {lectorium.isInternal && <Maps />}
          <LectoriumFAQ faq={lectorium?.faq} />
          {lectorium?.lectoriums?.length > 0 && <NextEvents lectorium={lectorium} />}
        </>
      )}
    </div>
  )
}

export default PageLectorium
