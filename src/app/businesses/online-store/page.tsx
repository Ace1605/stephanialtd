import { Metadata } from 'next';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { VPayNumbers } from '@/components/modules/VPayNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import lady from '/public/assets/businesses/store-lady.png';
import fullLady from '/public/assets/businesses/online-store.png';
import miniLady from '/public/assets/businesses/mini-online-store.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { onlineGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Online Store',
};

export default function Fashion() {
  return (
    <>
      <IndustriesHero
        subtitle='The ultimate payment solution for online stores across all business types. '
        description='Our platform offers an array of products including a versatile checkout system with multiple payment options, and comprehensive solutions for setting up and running online stores effortlessly, without the need for hosting or building a website from scratch. With VPay, stepping into the digital marketplace has never been easier'
        title='Online Stores'
        id='online_store_hero'
        firstImage={fullLady}
        secondImage={miniLady}
      />
      <VideoSection
        image={lady}
        title='Delivering Proven Results For '
        lastWord='Online Stores'
        id='online_store_video_section'
        hClassName='768:!w-2/3'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description goals={onlineGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={[]} />
      <VPayNumbers withoutParent />
      <CallToAction />
    </>
  );
}
