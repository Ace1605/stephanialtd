import { Metadata } from 'next';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { VPayNumbers } from '@/components/modules/VPayNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import lady from '/public/assets/businesses/bus-lady.png';
import guy from '/public/assets/businesses/on-phone.png';
import bus from '/public/assets/businesses/bus.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { transportationGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Transportation',
};

export default function Transportation() {
  return (
    <>
      <IndustriesHero
        subtitle='At VPay, we are committed to redefining payment solutions for the transportation industry. '
        description='Our innovative Tap and Pay (NFC) technology and advanced POS terminals are tailored to meet the dynamic needs of this fast-paced sector. Experience seamless, secure, and swift transactions that keep your business moving forward.'
        title='Transportation'
        id='transportation_hero'
        firstImage={guy}
        secondImage={bus}
      />
      <VideoSection
        image={lady}
        title='Delivering Proven Results For '
        lastWord='Transportation'
        id='transportation_video_section'
        embedId='uWT8bdV2DNs'
        embedded
        hClassName='768:!w-2/3'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description goals={transportationGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={[]} />
      <VPayNumbers withoutParent />
      <CallToAction />
    </>
  );
}
