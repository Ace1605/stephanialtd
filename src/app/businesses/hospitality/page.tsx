import { Metadata } from 'next';
import { createClient } from '@/prismicio';
import { FaqsAsFooter } from '@/components/modules/faqs/FaqsAsFooter';
import { DownloadPrompt } from '@/components/sections/home/DownloadPrompt';
import { IndustriesHero } from '@/components/sections/industries/IndustriesHero';
import { VPayNumbers } from '@/components/modules/VPayNumbers';
import { CallToAction } from '@/components/core/Footer/CallToAction';
import { VideoSection } from '@/components/sections/industries/VideoSection';
import guy from '/public/assets/businesses/ramen-man.png';
import waiter from '/public/assets/businesses/waiter.png';
import leisure from '/public/assets/businesses/leisure.png';
import { ServiceSolution } from '@/components/sections/industries/ServiceSolution';
import { Description } from '@/components/sections/industries/hook/useDescription';
import { hospitalityGoals } from '@/components/sections/industries/contants';

export const metadata: Metadata = {
  title: 'Fashion',
};

export default async function Hospitality() {
  const client = createClient();
  const faqs = await client.getAllByType('faq');
  return (
    <>
      <IndustriesHero
        subtitle='Specialised payment solutions for the hospitality industry, including hotels, restaurants, bars, and entertainment centers.'
        description="Our suite of products for hospitality businesses include POS Terminals, NFC Payment options, Cashier systems, analytics tools, and multiple payment options - is designed to streamline your transactions and enhance your guests' experience."
        title='Hospitality'
        id='hospitality_hero'
        firstImage={waiter}
        secondImage={leisure}
      />
      <VideoSection
        image={guy}
        title='Delivering Proven Results For '
        lastWord='Hospitality Providers'
        id='hospitality_video_section'
        embedId='ArPpwq8189M'
        embedded
        hClassName='768:!w-2/3'
      />
      <ServiceSolution
        title=' out your service all around.'
        lastWord='Smooth'
        description={<Description goals={hospitalityGoals} />}
      />

      <DownloadPrompt />
      <FaqsAsFooter faqs={faqs} />
      <VPayNumbers withoutParent />
      <CallToAction />
    </>
  );
}
