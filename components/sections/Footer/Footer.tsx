'use client'
import Wrapper from '@/ui/Wrapper'
import stls from '@/components/sections/Footer/Footer.module.sass'
import useBetterMediaQuery from '@/hooks/general/UseBetterMediaQuery'
import FooterDesktop from '@/components/sections/Footer/Desktop/FooterDesktop'
import FooterMobile from '@/components/sections/Footer/Mobile/FooterMobile'
import { useEffect, useState } from 'react'
import getUtmSourceFromCookie from '@/helpers/funcs/getUtmSourceFromCookie'
import { getCookie } from 'cookies-next'

const Footer = () => {
  const isMobileAndTabletLayout = useBetterMediaQuery('(max-width: 768px)')

  const [isEdpartners, setIsEdpartners] = useState(false)

  const partCookie = getCookie('utm')
  useEffect(() => {
    const timer = setTimeout(() => {
      const utmSource = getUtmSourceFromCookie()
      setIsEdpartners(utmSource === 'edpartners')
    }, 300)
    return () => clearTimeout(timer) // Очищаем таймер при размонтировании
  }, [isEdpartners, partCookie])

  return (
    <footer className={stls.container}>
      {isMobileAndTabletLayout ? (
        <FooterMobile />
      ) : (
        <Wrapper>
          <FooterDesktop />
        </Wrapper>
      )}
    </footer>
  )
}

export default Footer
