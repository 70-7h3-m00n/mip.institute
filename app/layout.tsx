import { Analytics } from '@vercel/analytics/react'
import MenuState from '@/context/menu/MenuState'
import FieldsTooltipState from '@/context/fieldsTooltip/FieldsTooltipState'
import Header from '@/components/sections/Header'
import StickyBottom from '@/components/sections/StickyBottom'
import Footer from '@/components/sections/Footer/Footer'
import '@/styles/app.sass'
import truncate from '@/helpers/general/truncate'
import Scripts from '@/components/sections/Scripts'

export const metadata = {
  title: 'Московский Институт Психологии',
  description: truncate(
    'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
    120
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ru'>
      <body>
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
            <Scripts />
            {children}
            <Footer />

            <div>
              <StickyBottom />
            </div>
            {/* </div> */}
          </FieldsTooltipState>
        </MenuState>
        <Analytics />
      </body>
    </html>
  )
}
