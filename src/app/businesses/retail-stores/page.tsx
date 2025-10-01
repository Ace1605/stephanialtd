import { Metadata } from 'next';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { StephaniaNumbers } from '@/components/modules/StephaniaNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import lady from '/public/assets/products/product-lady.png';
import ladyManager from '/public/assets/businesses/woman-manager.png';
import laptop from '/public/assets/businesses/mini-laptop.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { retailGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Retail Stores',
};

export default function RetailStores() {
  return (
    <>
      <IndustriesHero
        subtitle='Optimize your business and prepare for the future with Stephanias end-to-end retail payments capabilities.'
        description='A unified payment solution that handles your payment processing, fraud/risk management, payouts, and customer incentives. Provide your team with scalable payment solutions that adapt to changing retail landscapes and evolving consumer trends.'
        title='Retail Stores'
        id='retail_stores_hero'
        firstImage={ladyManager}
        secondImage={laptop}
      />
      <VideoSection
        image={lady}
        title='Delivering Proven Results For '
        lastWord='Retailers'
        id='retail_video_section'
        embedded
        embedId='hf2bXhBXX2Y'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description isSpaced goals={retailGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={[]} />
      <StephaniaNumbers withoutParent />
      <CallToAction />
    </>
  );
}
