'use client'
import OurPartnersSkelet from '@/components/partners/OurPartners/OurPartnersSkelet'
import CommunitySectionSkelet from '@/components/partners/CommunitySection/CommunitySectionSkelet'
import BecomePartnerSkeleton from '@/components/partners/BecomePartner/BecomePartnerSkeleton'

export default function Loading() {
  return (
    <>
      <CommunitySectionSkelet />
      <OurPartnersSkelet />
      <BecomePartnerSkeleton/>
    </>
  )
}
