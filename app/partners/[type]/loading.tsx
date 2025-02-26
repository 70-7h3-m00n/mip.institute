'use client'
import Wrapper from '@/ui/Wrapper'
import OurPartnersSkelet from '@/components/partners/OurPartners/OurPartnersSkelet'
import CommunitySectionSkelet from '@/components/partners/CommunitySection/CommunitySectionSkelet'

export default function Loading() {
  return (
    <Wrapper>
      <OurPartnersSkelet/>
      <CommunitySectionSkelet/>
    </Wrapper>
  )
}
