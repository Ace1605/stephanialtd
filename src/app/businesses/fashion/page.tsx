import { Metadata } from 'next';
import { createClient } from '@/prismicio';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { VPayNumbers } from '@/components/modules/VPayNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import lady from '/public/assets/businesses/fashion-lady.png';
import fashion from '/public/assets/businesses/fashion-store.png';
import miniFashion from '/public/assets/businesses/mini-fashion-store.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { fashionGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Fashion',
};

export default async function Fashion() {
  const client = createClient();
  const faqs = await client.getAllByType('faq');
  return (
    <>
      <IndustriesHero
        subtitle='Where seamless payments meet the style of the fashion world.'
        description='VPay offers a range of products including versatile e-commerce checkout options, user-friendly online store setups, and reliable POS terminals. VPay is here to enhance your online retail presence, making transactions effortless and secure.'
        title='Fashion'
        id='fashion_hero'
        firstImage={fashion}
        secondImage={miniFashion}
      />
      <VideoSection
        image={lady}
        title='Delivering Proven Results For '
        lastWord='Fashion Businesses'
        id='fashion_video_section'
        hClassName='768:!w-2/3'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description goals={fashionGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={faqs} />
      <VPayNumbers withoutParent />
      <CallToAction />
    </>
  );
}
