import { Analytics } from '@vercel/analytics/react'
import MenuState from '@/context/menu/MenuState'
import FieldsTooltipState from '@/context/fieldsTooltip/FieldsTooltipState'
import Header from '@/components/sections/Header'
import StickyBottom from '@/components/sections/StickyBottom'
import Footer from '@/components/sections/Footer/Footer'
import '@/styles/app.sass'
import truncate from '@/helpers/general/truncate'
import Scripts from '@/components/sections/Scripts'
import { Suspense } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { AppContextProvider } from '@/context/AppContextProvider'
import { fetchAllProgramsData } from '@/lib/fetchData/fetchAllProgramsData'
import { MediaQueryProvider } from '@/context/MediaQueryContext'
// import ABTestScript from '@/components/abTests/roistatAB'

export const metadata = {
  title: 'Московский Институт Психологии',
  description: truncate(
    'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
    120
  )
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const initialData = await fetchAllProgramsData()

  return (
    <html lang='ru'>
      <body style={{ backgroundColor: '#F4F4F4' }}>
        <AppContextProvider initialData={initialData}>
          <MediaQueryProvider>
            <Suspense>
              <MenuState>
                <FieldsTooltipState>
                  {/* <div className={promo ? 'fullContainerWithPromo fullContainer' : 'fullContainer'}> */}

                  {/* <StickyTop
                isWithGift={isWithGift}
                onClick={closePromo}
                isPromo={isPromo}
                promoText={promoText}
              /> */}

                  <Header />
                  {/* <ABTestScript /> */}
                  <Scripts />
                  {children}
                  <Footer />

                  <div>
                    <StickyBottom pageAppRouter={true} />
                  </div>
                  {/* </div> */}
                </FieldsTooltipState>
              </MenuState>
              <Analytics />
            </Suspense>
          </MediaQueryProvider>
        </AppContextProvider>
      </body>
    </html>
  )
}
